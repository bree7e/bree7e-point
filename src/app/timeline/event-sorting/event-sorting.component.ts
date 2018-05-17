import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TimelineEvent } from 'src/app/shared/timeline-event';
import { EventTypes } from 'src/app/shared/event-types.enum';

export enum SortingOrder {
    Unsorted = 0,
    Asc = 1,
    Desc = -1
}
export interface TimelineSorting {
    type: EventTypes;
    order: SortingOrder;
}

@Component({
    selector: 'app-event-sorting',
    templateUrl: './event-sorting.component.html',
    styleUrls: ['./event-sorting.component.scss']
})
export class EventSortingComponent implements OnInit {
    public sortingOrder = SortingOrder;
    public eventTypes = EventTypes;
    public timelineSorting: TimelineSorting;
    @Output() changeSortingType: EventEmitter<TimelineSorting> = new EventEmitter;

    constructor() {}

    ngOnInit() {
        this.timelineSorting = {
            type: EventTypes.News,
            order: SortingOrder.Unsorted
        };
    }

    changeSorting(type: EventTypes) {
        this.timelineSorting.type = type;
        switch (this.timelineSorting.order) {
            case SortingOrder.Unsorted:
                this.timelineSorting.order = SortingOrder.Asc;
                break;
            case SortingOrder.Asc:
                this.timelineSorting.order = SortingOrder.Desc;
                break;
            case SortingOrder.Desc:
                this.timelineSorting.order = SortingOrder.Unsorted;
                break;
        }
        this.changeSortingType.emit(this.timelineSorting);
    }
}
