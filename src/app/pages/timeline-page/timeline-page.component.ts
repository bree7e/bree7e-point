import { Component, OnInit } from '@angular/core';

import { TimelineEvent } from 'src/app/shared/timeline-event';
import { EventService } from 'src/app/timeline/event.service';

@Component({
    selector: 'app-timeline-page',
    templateUrl: './timeline-page.component.html',
    styleUrls: ['./timeline-page.component.scss']
})
export class TimelinePageComponent implements OnInit {
    public events: TimelineEvent[] = [];

    constructor(private eventService: EventService) {}

    getEvents(): void {
        this.eventService
            .getEvents()
            .subscribe(events => (this.events = events));
    }

    ngOnInit() {
        this.getEvents();
    }
}
