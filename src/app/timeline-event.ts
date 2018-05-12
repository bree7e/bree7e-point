export abstract class TimelineEvent {
    constructor(
        private id: string,
        public date: Date
    ) { }

    get type() {
        return this.constructor.name;
    }
}
