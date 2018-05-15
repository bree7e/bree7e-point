import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

import {
    NewsEvent,
    TransactionEvent,
    EventTypes
} from 'src/app/shared/timeline-event';

// TODO глобально заменить все TimelineEvent на возвращаемые общий тип NewsEvent | TransactionEvent
@Injectable({
    providedIn: 'root'
})
export class EventService {
    private id = 0;
    private events: EventTypes[] = [];

    constructor() {}

    getEvents(): Observable<EventTypes[]> {
        return of(this.events);
    }

    getNewsById(id: string): Observable<NewsEvent> {
        const news = <NewsEvent>this.events
            .filter(event => event instanceof NewsEvent)
            .find(event => event.id === id);
        return of(news);
    }

    getTransactionById(id: string): Observable<TransactionEvent> {
        const transaction = <TransactionEvent>this.events
            .filter(event => event instanceof TransactionEvent)
            .find(event => event.id === id);
        return of(transaction);
    }

    addEvent(event: EventTypes): void {
        event.id = String(this.id++);
        this.events.push(event);
    }
}
