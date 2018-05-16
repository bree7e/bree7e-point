import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsEvent } from 'src/app/shared/timeline-event';
import { EventService } from 'src/app/timeline/event.service';
import { EventTypes } from 'src/app/shared/event-types.enum';

@Component({
    selector: 'app-news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
    @Input() news: NewsEvent;

    constructor(
        private route: ActivatedRoute,
        private eventService: EventService
    ) {}

    ngOnInit(): void {
        this.getNews();
    }

    getNews(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.eventService.getEvent(id, EventTypes.News)
            .subscribe(news => (this.news = news));
    }
}
