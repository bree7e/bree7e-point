import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TimelineEvent } from 'src/app/shared/timeline-event';
import { EventService } from './timeline/event.service';
import { TimelineSorting, SortingOrder } from './timeline/event-sorting/event-sorting.component';

@Component({
    selector: 'app-timeline-page',
    templateUrl: './timeline-page.component.html',
    styleUrls: ['./timeline-page.component.scss']
})
export class TimelinePageComponent implements OnInit {
    public events$: Observable<TimelineEvent[]>;

    constructor(private eventService: EventService) {}

    onChangeSorting(sorting: TimelineSorting) {
        if (sorting.order === SortingOrder.Unsorted) {
            this.eventService.clearSorting();
        } else {
            this.eventService.setSorting(sorting);
        }
    }

    ngOnInit() {
        this.events$ = this.eventService.events$.pipe(tap(e => console.log(e)));
    }
}
