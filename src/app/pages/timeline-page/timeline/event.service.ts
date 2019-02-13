import { Injectable } from '@angular/core';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

import {
    NewsEvent,
    TransactionEvent,
    TimelineTypes,
} from 'src/app/shared/timeline-event';
import { EventTypes } from 'src/app/shared/event-types.enum';
import { TimelineSorting, SortingOrder } from './event-sorting/event-sorting.component';
import { SortingTypes } from 'src/app/shared/sorting-types.enum';

@Injectable({
    providedIn: 'root',
})
export class EventService {
    private id = 0;
    private sorting: TimelineSorting;
    private _eventsObserver = new BehaviorSubject<TimelineTypes[]>([]);
    readonly events$ = this._eventsObserver.asObservable().pipe(delay(250));
    private set _events(value: TimelineTypes[]) {
        this._eventsObserver.next(value);
    }
    private get _events(): TimelineTypes[] {
        return this._eventsObserver.value;
    }

    constructor() {
        this.clearSorting();
    }

    loadNextEvents(): void {
        // backand call
        this._events = this._events;
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
        event.id = String(this.id++);
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
        let result = false;
        this._eventsObserver.next(
            this._eventsObserver.value.filter(event => {
                const shouldDelete = !(
                    event.id === id && event instanceof TransactionEvent
                );
                if (shouldDelete) {
                    result = true;
                }
                return shouldDelete;
            })
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
