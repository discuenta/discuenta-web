import {ValidationError} from "./errors.entity.js";

export class DateTime {
    #date;

    constructor(date = new Date()) {
        const parsedDate = date instanceof Date
            ? date
            : new Date(date);
        if (isNaN(parsedDate.getTime()))
            throw new ValidationError(`Invalid date: ${date}`);
        this.#date = parsedDate;
    }

    get date() { return this.#date; }

    toISOString() {
        return this.#date.toISOString();
    }

    toString() {
        return this.#date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }

    equals(other) {
        return other instanceof DateTime &&
            this.#date.getTime() === other.#date.getTime();
    }
}