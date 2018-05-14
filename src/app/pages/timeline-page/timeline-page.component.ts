import { Component, OnInit } from '@angular/core';

import { Currencies } from 'src/app/shared/currencies.enum';
import { TimelineEvent, TransactionEvent } from 'src/app/shared/timeline-event';

@Component({
  selector: 'app-timeline-page',
  templateUrl: './timeline-page.component.html',
  styleUrls: ['./timeline-page.component.scss']
})
export class TimelinePageComponent implements OnInit {
  public events: TimelineEvent[] = [];

  constructor() { }

  ngOnInit() {
    // TransactionEvent|NewsEvent
    debugger;
    this.events.push(new TransactionEvent('1', new Date(), Currencies.RUB, 500, 'Горнов А.В.'));
    this.events.push(new TransactionEvent('2', new Date(), Currencies.EUR, 30, 'Петров А.В.'));
    this.events.push(new TransactionEvent('3', new Date(), Currencies.USD, -20, 'Иванов А.В.'));
  }

}
