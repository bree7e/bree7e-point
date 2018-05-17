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
    private id: string;
    @Input() news: NewsEvent;

    constructor(
        private route: ActivatedRoute,
        private eventService: EventService
    ) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getNews();
    }

    getNews(): void {
        this.eventService.getEvent(this.id, EventTypes.News)
            .subscribe(news => (this.news = news));
    }

    haveRead(): void {
        this.eventService.haveReadNews(this.id);
    }
}
