import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { filter, delay } from 'rxjs/operators';

import {
    NewsEvent,
    TransactionEvent,
    TimelineTypes
} from 'src/app/shared/timeline-event';
import { EventTypes } from 'src/app/shared/event-types.enum';
import { TimelineSorting, SortingOrder } from 'src/app/timeline/event-sorting/event-sorting.component';
import { SortingTypes } from '../shared/sorting-types.enum';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    private id = 0;
    private events: TimelineTypes[] = [];
    private sorting: TimelineSorting;

    constructor() {
        this.clearSorting();
    }

    getEvents(): Observable<TimelineTypes[]> {
        const events$ = of(this.events).pipe(delay(250));
        return events$;
    }

    getEvent(id: string, type: EventTypes.News): Observable<NewsEvent>;
    getEvent(id: string, type: EventTypes.Transaction): Observable<TransactionEvent>;
    getEvent(id: string, type: EventTypes): Observable<TimelineTypes> {
        switch (type) {
            case EventTypes.News:
                return of(<NewsEvent>this.events
                    .filter(event => event instanceof NewsEvent)
                    .find(event => event.id === id)).pipe(delay(300));
            case EventTypes.Transaction:
                return of(<TransactionEvent>this.events
                    .filter(event => event instanceof TransactionEvent)
                    .find(event => event.id === id)).pipe(delay(300));
            }
    }

    addEvent(event: TimelineTypes): void {
        event.id = String(this.id++);
        this.events.push(event);
    }

    haveReadNews(id: string): void {
        (this.events.filter(event => event instanceof NewsEvent)
            .find(news => news.id === id) as NewsEvent).isUnread = false;
    }

    deleteTransaction(id: string): Observable<boolean> {
        let result = false;
        this.events = this.events
            .filter(event => {
                const shouldDelete = !(event.id === id && event instanceof TransactionEvent);
                if (shouldDelete) { result = true; }
                return shouldDelete;
            });
        return of(result).pipe(delay(500));
    }

    clearSorting(): void {
        this.sorting = {
            type: SortingTypes.Date,
            order: SortingOrder.Unsorted
        };
    }

    setSorting(sorting: TimelineSorting): void {
        this.sorting = sorting;
        this.sortEvents();
    }

    sortEvents(): void {
        this.events.sort((a, b) => {
            let result = 0;
            if (a[this.sorting.type] > b[this.sorting.type]) {
                result = 1;
            } else  {
                result = -1;
            }
            result *= this.sorting.order;
            return result;
        });
    }


}
