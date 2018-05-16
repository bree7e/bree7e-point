import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from 'src/app/timeline/event.service';
import { TransactionEvent } from 'src/app/shared/timeline-event';
import { EventTypes } from '../../shared/event-types.enum';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.scss']
})
export class TransactionPageComponent implements OnInit {
    @Input() transaction: TransactionEvent;

    constructor(
        private route: ActivatedRoute,
        private eventService: EventService
    ) {}

    ngOnInit(): void {
        this.getTransaction();
    }

    getTransaction(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.eventService.getEvent(id, EventTypes.Transaction)
            .subscribe(t => (this.transaction = t));
    }

}
