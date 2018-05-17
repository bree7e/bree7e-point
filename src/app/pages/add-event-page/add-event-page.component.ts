import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TimelineTypes, NewsEvent, TransactionEvent } from 'src/app/shared/timeline-event';
import { EventTypes } from '../../shared/event-types.enum';
import { Currencies } from '../../shared/currencies.enum';

@Component({
    selector: 'app-add-event-page',
    templateUrl: './add-event-page.component.html',
    styleUrls: ['./add-event-page.component.scss']
})
export class AddEventPageComponent implements OnInit {
    private newEvent: TimelineTypes;
    private eventType: EventTypes;
    // необходимо для доступа к enum из шаблона
    private types = EventTypes;

    @Output()
    addTimelineEvent: EventEmitter<TimelineTypes> = new EventEmitter();

    constructor() {}

    ngOnInit() {
        this.changeType(EventTypes.News);
    }

    addEvent() {
        console.log('addTimelineEvent click');
    }

    changeType(newType: EventTypes) {
        this.eventType = newType;
        switch (newType) {
            case EventTypes.News:
                this.newEvent = new NewsEvent('', '');
                break;
            case EventTypes.Transaction:
                this.newEvent = new TransactionEvent(new Date(), Currencies.RUB, 0, '');
                break;
        }
    }
}
