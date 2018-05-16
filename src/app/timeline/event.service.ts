import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { filter, delay } from 'rxjs/operators';

import {
    NewsEvent,
    TransactionEvent,
    TimelineTypes
} from 'src/app/shared/timeline-event';
import { EventTypes } from 'src/app/shared/event-types.enum';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    private id = 0;
    private events: TimelineTypes[] = [];

    constructor() {}

    getEvents(): Observable<TimelineTypes[]> {
        const events$ = of(this.events).pipe(delay(2500));
        return events$;
    }

    getEvent(id: string, type: EventTypes.News): Observable<NewsEvent>;
    getEvent(id: string, type: EventTypes.Transaction): Observable<TransactionEvent>;
    getEvent(id: string, type: EventTypes): Observable<TimelineTypes> {
        switch (type) {
            case EventTypes.News:
                return of(<NewsEvent>this.events
                    .filter(event => event instanceof NewsEvent)
                    .find(event => event.id === id));
            case EventTypes.Transaction:
                return of(<TransactionEvent>this.events
                    .filter(event => event instanceof TransactionEvent)
                    .find(event => event.id === id));
            }
    }

    addEvent(event: TimelineTypes): void {
        event.id = String(this.id++);
        this.events.push(event);
    }
}
