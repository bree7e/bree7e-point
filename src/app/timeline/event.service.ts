import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { NewsEvent, TransactionEvent, TimelineEvent } from 'src/app/shared/timeline-event';

// TODO глобально заменить все TimelineEvent на возвращаемые общий тип NewsEvent | TransactionEvent
@Injectable({
    providedIn: 'root'
})
export class EventService {
    private events: TimelineEvent[];

    constructor() {}

    getEvents(): Observable<TimelineEvent[]> {
        return of(this.events);
    }

    // getHero(id: number): Observable<Hero> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     return this.http
    //         .get<Hero>(url)
    //         .pipe(
    //             tap(_ => this.log(`fetched hero id=${id}`)),
    //             catchError(this.handleError<Hero>(`getHero id=${id}`))
    //         );
    // }

    getEvent(id: number, classType): Observable<NewsEvent>  {
        // instanceof
        return;
    }

    addEvent(event: TimelineEvent) {
        return;
    }
}
