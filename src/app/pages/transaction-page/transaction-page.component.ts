import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from 'src/app/timeline/event.service';
import { TransactionEvent } from 'src/app/shared/timeline-event';

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

  ngOnInit() {
  }

}
