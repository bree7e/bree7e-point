import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EventService } from 'src/app/timeline/event.service';
import { TransactionEvent } from 'src/app/shared/timeline-event';
import { EventTypes } from '../../shared/event-types.enum';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.scss']
})
export class TransactionPageComponent implements OnInit {
    private showDeleteButton = true;
    private id: string;
    @Input() transaction: TransactionEvent;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private eventService: EventService
    ) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getTransaction();
    }

    getTransaction(): void {
        this.eventService.getEvent(this.id, EventTypes.Transaction)
            .subscribe(t => (this.transaction = t));
    }

    deleteTransaction(): void {
        this.showDeleteButton = false;
        this.eventService.deleteTransaction(this.id)
            .subscribe(deleted => {
                if (deleted) {
                    this.router.navigate(['timeline']);
                }
            });
    }
}
