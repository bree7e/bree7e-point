import { Component, OnInit } from '@angular/core';

import { EventService } from 'src/app/timeline/event.service';
import { Currencies } from 'src/app/shared/currencies.enum';
import { TransactionEvent, NewsEvent } from 'src/app/shared/timeline-event';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private eventService: EventService) { }

    ngOnInit () {
        this.eventService.addEvent(
            new TransactionEvent(
                new Date(2018, 4, 19),
                Currencies.RUB,
                500,
                'Горнов А.В.',
                'Праздник'
            )
        );
        this.eventService.addEvent(
            new NewsEvent(
                'Персональное предложение',
                'Кредит по паспорту на особых условиях. Предложение действительно до 31 мая 2018 г.',
                new Date(2018, 5, 5)
            )
        );
        this.eventService.addEvent(
            new TransactionEvent(
                new Date(2018, 1, 12),
                Currencies.USD,
                30,
                'Иванов А.В., ИП',
                'За товар'
            )
        );
        this.eventService.addEvent(
            new TransactionEvent(
                new Date(),
                Currencies.EUR,
                -2000,
                'Ребята, ООО',
                'За услуги'
            )
        );
        this.eventService.addEvent(
            new NewsEvent(
                'Внимание мошенники',
                `'НИКОГДА НЕ ОТПРАВЛЯЙТЕ ДЕНЬГИ НЕЗНАКОМЫМ ЛИЦАМ НА ИХ ЭЛЕКТРОННЫЕ СЧЕТА
                Помните, что вероятность выиграть приз, не принимая участия в розыгрыше стремится к нулю, а
                вероятность возврата денег, перечисленных на анонимный электронный кошелек злоумышленников, и того
                меньше.`,
                new Date(2018, 3, 2),
                true
            )
        );
        this.eventService.addEvent(
            new TransactionEvent(
                new Date(2018, 1, 22),
                Currencies.USD,
                266,
                'Медведев А.В., ИП'
            )
        );
    }
}
