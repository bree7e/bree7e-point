import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {
  TimelineEvent,
  TransactionEvent,
  NewsEvent
} from 'src/app/shared/timeline-event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  @Input() eventList: Array<TransactionEvent|NewsEvent>;

  constructor() { }

  ngOnInit() {
  }

}
