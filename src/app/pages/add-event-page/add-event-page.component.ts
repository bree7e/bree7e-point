import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { TimelineTypes, NewsEvent, TransactionEvent } from 'src/app/shared/timeline-event';
import { EventTypes } from '../../shared/event-types.enum';
import { Currencies } from '../../shared/currencies.enum';
import { EventService } from 'src/app/timeline/event.service';

@Component({
    selector: 'app-add-event-page',
    templateUrl: './add-event-page.component.html',
    styleUrls: ['./add-event-page.component.scss']
})
export class AddEventPageComponent implements OnInit {
    public newEvent: TimelineTypes;
    public eventType: EventTypes;
    public types = EventTypes;

    @Output() addTimelineEvent = new EventEmitter<TimelineTypes>();

    constructor(
        private eventService: EventService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.changeType(EventTypes.News);
    }

    addEvent(): void {
        this.eventService.addEvent(this.newEvent);
        this.router.navigate(['timeline']);
    }

    changeType(newType: EventTypes): void {
        console.log('changeType to', newType);
        this.eventType = newType;
        switch (Number(newType)) {
            case EventTypes.News:
                this.newEvent = new NewsEvent('', '');
                break;
            case EventTypes.Transaction:
                this.newEvent = new TransactionEvent(new Date(), Currencies.RUB, 0, '');
                break;
        }
    }

    onFormChange(type: EventTypes, formValues: any): void {
        this.newEvent.date = new Date(formValues.date);
        switch (type) {
            case EventTypes.News:
                (this.newEvent as NewsEvent).title = formValues.title;
                (this.newEvent as NewsEvent).content = formValues.content;
                break;
            case EventTypes.Transaction:
                (this.newEvent as TransactionEvent).description = formValues.description;
                (this.newEvent as TransactionEvent).currency = formValues.currency;
                (this.newEvent as TransactionEvent).amount = formValues.amount;
                (this.newEvent as TransactionEvent).agent = formValues.agent;
                break;
        }
    }
}
