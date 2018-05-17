import { Component, OnInit } from '@angular/core';

import { TimelineEvent } from 'src/app/shared/timeline-event';
import { EventService } from 'src/app/timeline/event.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-timeline-page',
    templateUrl: './timeline-page.component.html',
    styleUrls: ['./timeline-page.component.scss']
})
export class TimelinePageComponent implements OnInit {
    public events: Observable<TimelineEvent[]>;

    constructor(private eventService: EventService) {}

    onChangeSorting(s) {
        console.log('change sorting', s);
    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }
}
