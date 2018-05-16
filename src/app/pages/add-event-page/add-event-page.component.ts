import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

import { NewsEvent } from 'src/app/shared/timeline-event';

@Component({
  selector: 'app-add-event-page',
  templateUrl: './add-event-page.component.html',
  styleUrls: ['./add-event-page.component.scss']
})
export class AddEventPageComponent implements OnInit {
  private newEvent = new NewsEvent('', '');

  @Output()
  addTimelineEvent: EventEmitter<NewsEvent> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  add() {
    console.log('addTimelineEvent click');
  }

}
