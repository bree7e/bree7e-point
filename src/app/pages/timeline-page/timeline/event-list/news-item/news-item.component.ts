import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NewsEvent } from 'src/app/shared/timeline-event';

@Component({
    selector: 'app-news-item',
    templateUrl: './news-item.component.html',
    styleUrls: ['./news-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsItemComponent implements OnInit {
    @Input() event: NewsEvent;

    constructor() {}

    ngOnInit() {}
}
