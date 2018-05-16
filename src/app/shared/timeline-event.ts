import { Currencies } from './currencies.enum';

export abstract class TimelineEvent {
    public id: string;

    constructor(public date: Date) {}

    get type() {
        return this.constructor.name;
    }
}

export class NewsEvent extends TimelineEvent {
    constructor(
        public title: string,
        public content: string,
        date: Date = new Date(),
        public isRead = false
    ) {
        super(date);
    }
}

export class TransactionEvent extends TimelineEvent {
    constructor(
        date: Date,
        public currency = Currencies.RUB,
        public amount: number,
        public agent: string,
        public description: string = ''
    ) {
        super(date);
    }
}

export type TimelineTypes = NewsEvent | TransactionEvent;
