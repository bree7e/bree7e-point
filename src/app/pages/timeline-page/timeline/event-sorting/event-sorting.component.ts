import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TimelineEvent } from 'src/app/shared/timeline-event';
import { SortingTypes } from 'src/app/shared/sorting-types.enum';

export enum SortingOrder {
    Unsorted = 0,
    Asc = 1,
    Desc = -1
}
export interface TimelineSorting {
    type: SortingTypes;
    order: SortingOrder;
}

@Component({
    selector: 'app-event-sorting',
    templateUrl: './event-sorting.component.html',
    styleUrls: ['./event-sorting.component.scss']
})
export class EventSortingComponent implements OnInit {
    public sortingOrder = SortingOrder;
    public sortingTypes = SortingTypes;
    public timelineSorting: TimelineSorting;
    @Output() changeSortingType: EventEmitter<TimelineSorting> = new EventEmitter;

    constructor() {}

    ngOnInit() {
        this.timelineSorting = {
            type: SortingTypes.Date,
            order: SortingOrder.Unsorted
        };
    }

    changeSorting(type: SortingTypes) {
        this.timelineSorting.type = type;
        switch (this.timelineSorting.order) {
            case SortingOrder.Unsorted:
            case SortingOrder.Desc:
                this.timelineSorting.order = SortingOrder.Asc;
                break;
            case SortingOrder.Asc:
                this.timelineSorting.order = SortingOrder.Desc;
                break;
        }
        this.changeSortingType.emit(this.timelineSorting);
    }
}
