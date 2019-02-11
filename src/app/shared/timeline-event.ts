import { Currencies } from './currencies.enum';

export abstract class TimelineEvent {
    public id: string;
    abstract type: string;
    constructor(public date: Date) {}
}

export class NewsEvent extends TimelineEvent {
    public type = 'NewsEvent';
    constructor(
        public title: string,
        public content: string,
        date: Date = new Date(),
        public isUnread = true
    ) {
        super(date);
    }
}

export class TransactionEvent extends TimelineEvent {
    public type = 'TransactionEvent';
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
