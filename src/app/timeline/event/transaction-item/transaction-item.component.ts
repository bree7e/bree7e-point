import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { TransactionEvent } from 'src/app/shared/timeline-event';

@Component({
    selector: 'app-transaction-item',
    templateUrl: './transaction-item.component.html',
    styleUrls: ['./transaction-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionItemComponent implements OnInit {
    @Input() event: TransactionEvent;

    constructor() {}

    ngOnInit() {}
}
