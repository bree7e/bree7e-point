import { Component, OnInit } from '@angular/core';

import { Currencies } from 'src/app/shared/currencies.enum';
import {
    TimelineEvent,
    TransactionEvent,
    NewsEvent
} from 'src/app/shared/timeline-event';

@Component({
    selector: 'app-timeline-page',
    templateUrl: './timeline-page.component.html',
    styleUrls: ['./timeline-page.component.scss']
})
export class TimelinePageComponent implements OnInit {
    private id = 0;

    public events: TimelineEvent[] = [];

    constructor() {}

    ngOnInit() {
        // TransactionEvent|NewsEvent
        // debugger;
        this.events.push(
            new TransactionEvent(
                String(this.id++),
                new Date(2018, 4, 19),
                Currencies.RUB,
                500,
                'Горнов А.В.'
            )
        );
        this.events.push(
            new NewsEvent(
                String(this.id++),
                'Персональное предложение',
                'Кредит по паспорту на особых условиях. Предложение действительно до 31 мая 2018 г.',
                new Date(2018, 5, 5)
            )
        );
        this.events.push(
            new TransactionEvent(
                String(this.id++),
                new Date(2018, 1, 12),
                Currencies.USD,
                30,
                'Иванов А.В., ИП'
            )
        );
        this.events.push(
            new TransactionEvent(
                String(this.id++),
                new Date(),
                Currencies.EUR,
                -2000,
                'Ребята, ООО'
            )
        );
        this.events.push(
            new NewsEvent(
                String(this.id++),
                'Внимание мошенники',
                `'НИКОГДА НЕ ОТПРАВЛЯЙТЕ ДЕНЬГИ НЕЗНАКОМЫМ ЛИЦАМ НА ИХ ЭЛЕКТРОННЫЕ СЧЕТА
                Помните, что вероятность выиграть приз, не принимая участия в розыгрыше стремится к нулю, а
                вероятность возврата денег, перечисленных на анонимный электронный кошелек злоумышленников, и того
                меньше.`,
                new Date(2018, 3, 2),
                true
            )
        );
        this.events.push(
            new TransactionEvent(
                String(this.id++),
                new Date(2018, 1, 22),
                Currencies.USD,
                266,
                'Медведев А.В., ИП'
            )
        );
    }
}

// id: string,
// public title: string,
// public content: string,
// public isRead = false,
// date: Date = new Date()
