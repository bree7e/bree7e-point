import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TimelineEvent } from 'src/app/shared/timeline-event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  
  @Input() event: TimelineEvent;

  constructor() { }

  ngOnInit() {
  }

}
