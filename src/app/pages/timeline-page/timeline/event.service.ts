import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay, skip } from 'rxjs/operators';

import {
    NewsEvent,
    TransactionEvent,
    TimelineTypes,
} from 'src/app/shared/timeline-event';
import { EventTypes } from 'src/app/shared/event-types.enum';
import {
    TimelineSorting,
    SortingOrder,
} from './event-sorting/event-sorting.component';
import { SortingTypes } from 'src/app/shared/sorting-types.enum';
import { Currencies } from 'src/app/shared/currencies.enum';

const DATA = [
    new TransactionEvent(
        new Date(2018, 4, 19),
        Currencies.RUB,
        500,
        'Горнов А.В.',
        'Праздник'
    ),
    new NewsEvent(
        'Персональное предложение',
        'Кредит по паспорту на особых условиях. Предложение действительно до 31 мая 2018 г.',
        new Date(2018, 5, 5)
    ),
    new TransactionEvent(
        new Date(2018, 1, 12),
        Currencies.USD,
        30,
        'Иванов А.В., ИП',
        'За товар'
    ),
    new TransactionEvent(
        new Date(),
        Currencies.EUR,
        -2000,
        'Ребята, ООО',
        'За услуги'
    ),
    new NewsEvent(
        'Внимание мошенники',
        `'НИКОГДА НЕ ОТПРАВЛЯЙТЕ ДЕНЬГИ НЕЗНАКОМЫМ ЛИЦАМ НА ИХ ЭЛЕКТРОННЫЕ СЧЕТА
                    Помните, что вероятность выиграть приз, не принимая участия в розыгрыше стремится к нулю, а
                    вероятность возврата денег, перечисленных на анонимный электронный кошелек злоумышленников, и того
                    меньше.`,
        new Date(2018, 3, 2),
        true
    ),
    new TransactionEvent(
        new Date(2018, 1, 22),
        Currencies.USD,
        266,
        'Медведев А.В., ИП'
    ),
];

@Injectable({
    providedIn: 'root',
})
export class EventService {
    private id = 0;
    private sorting: TimelineSorting;
    private _eventsObserver = new BehaviorSubject<TimelineTypes[]>([]);
    // skip one to fake init
    readonly events$ = this._eventsObserver.asObservable().pipe(delay(250));
    private set _events(value: TimelineTypes[]) {
        this._eventsObserver.next(value);
    }
    private get _events(): TimelineTypes[] {
        return this._eventsObserver.value;
    }

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private transferState: TransferState
    ) {
        this.clearSorting();
    }

    initLoadEvents(): void {
        if (isPlatformBrowser(this.platformId)) {
            // Client only code.
            // platformId === browser
        }
        if (isPlatformServer(this.platformId)) {
            // Server only code.
            // platformId === server
        }

        const TYAPK_KEY = makeStateKey<TimelineTypes[]>('tyapk');
        if (this.transferState.hasKey(TYAPK_KEY)) {
            const transferEvents = this.transferState.get<TimelineTypes[]>(
                TYAPK_KEY,
                null
            );
            this.transferState.remove(TYAPK_KEY);
            this._events = transferEvents;
        } else {
            const backendData = DATA.map((item, index) => {
                item.id = String(index);
                return item;
            });
            if (isPlatformServer(this.platformId)) {
                this.transferState.set(TYAPK_KEY, backendData);
            }
            this._events = backendData;
        }
    }

    getEvent(id: string, type: EventTypes.News): Observable<NewsEvent>;
    getEvent(
        id: string,
        type: EventTypes.Transaction
    ): Observable<TransactionEvent>;
    getEvent(id: string, type: EventTypes): Observable<TimelineTypes> {
        switch (type) {
            case EventTypes.News:
                return of(<NewsEvent>(
                    this._eventsObserver.value
                        .filter(event => event instanceof NewsEvent)
                        .find(event => event.id === id)
                )).pipe(delay(300));
            case EventTypes.Transaction:
                return of(<TransactionEvent>(
                    this._eventsObserver.value
                        .filter(event => event instanceof TransactionEvent)
                        .find(event => event.id === id)
                )).pipe(delay(300));
        }
    }

    addEvent(event: TimelineTypes): void {
        event.id = String(++this._eventsObserver.value.length);
        this._events = [...this._events, event];
    }

    haveReadNews(id: string): void {
        const withReadEvent = [...this._events];
        (withReadEvent
            .filter(event => event instanceof NewsEvent)
            .find(news => news.id === id) as NewsEvent).isUnread = false;
        this._events = withReadEvent;
    }

    deleteTransaction(id: string): void {
        this._events = this._eventsObserver.value.filter(
            event => !(event.id === id && event instanceof TransactionEvent)
        );
    }

    clearSorting(): void {
        this.sorting = {
            type: SortingTypes.Date,
            order: SortingOrder.Unsorted,
        };
        this.sortEvents();
    }

    setSorting(sorting: TimelineSorting): void {
        this.sorting = sorting;
        this.sortEvents();
    }

    private sortEvents(): void {
        this._eventsObserver.next(
            this._eventsObserver.value.sort((a, b) => {
                let result = 0;
                if (a[this.sorting.type] > b[this.sorting.type]) {
                    result = 1;
                } else {
                    result = -1;
                }
                result *= this.sorting.order;
                return result;
            })
        );
    }
}
