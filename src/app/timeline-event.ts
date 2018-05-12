import { Currencies } from './currencies.enum';

export abstract class TimelineEvent {
    constructor(private _id: string, public date: Date) {}

    get id(): string {
        return this._id;
    }

    get type() {
        return this.constructor.name;
    }
}

export class NewsEvent extends TimelineEvent {
    constructor(
        id: string,
        public title: string,
        public content: string,
        public isRead = false,
        date: Date = new Date()
    ) {
        super(id, date);
    }
}

export class TransactionEvent extends TimelineEvent {
    constructor(
        id: string,
        date: Date,
        public currency = Currencies.RUB,
        public amount: number,
        public agent: string,
        public description: string = ''
    ) {
        super(id, date);
    }
}
