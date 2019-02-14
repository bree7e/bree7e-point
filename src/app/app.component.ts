import { Component, OnInit } from '@angular/core';
import { EventService } from './pages/timeline-page/timeline/event.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private eventService: EventService) { }

    ngOnInit () {
        this.eventService.initLoadEvents();
    }
}
