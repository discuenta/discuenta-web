import {ValidationError} from "./errors.entity.js";
import {Currency} from "./currency.value.js";

/**
 * Represents a monetary amount with a specific currency.
 * @author Salim Ramirez
 */
export class Money {
    /**
     * @type {number} The monetary amount.
     * @private
     */
    #amount;

    /**
     * @type {Currency} The currency of the monetary amount.
     * @private
     */
    #currency;

    /**
     * Creates an instance of Money.
     * @param {Object} config - The configuration object.
     * @param {number} config.amount - The monetary amount (must be non-negative).
     * @param {Currency} config.currency - The currency instance.
     * @throws {ValidationError} If amount is not a non-negative finite number or currency is not a Currency instance.
     */
    constructor({ amount, currency }) {
        if (typeof amount !== 'number' || !Number.isFinite(amount) || amount < 0)
            throw new ValidationError("Amount must be a non-negative finite number.");
        if (!(currency instanceof Currency))
            throw new ValidationError("Currency must be an instance of Currency.");
        this.#amount = Number(amount.toFixed(2));
        this.#currency = currency;
    }

    /**
     * Gets the monetary amount.
     * @returns {number} The monetary amount.
     */
    get amount() { return this.#amount; }

    /**
     * Gets the currency.
     * @returns {Currency} The currency instance.
     */
    get currency() { return this.#currency; }

    /**
     * Adds another Money instance to this one.
     * @param {Money} other - The other Money instance to add.
     * @returns {Money} A new Money instance with the sum.
     * @throws {ValidationError} If the other instance is not Money or has different currency.
     */
    add(other) {
        if (!(other instanceof Money) || !this.#currency.equals(other.currency))
            throw new ValidationError("Cannot add money with different currencies.");
        return new Money({ amount: this.#amount + other.amount, currency: this.#currency });
    }

    /**
     * Subtracts another Money instance from this one.
     * @param {Money} other - The other Money instance to subtract.
     * @returns {Money} A new Money instance with the difference.
     * @throws {ValidationError} If the other instance is not Money, has different currency, or amount exceeds current amount.
     */
    subtract(other) {
        if (!(other instanceof Money) || !this.#currency.equals(other.currency))
            throw new ValidationError("Cannot subtract money with different currencies.");
        if (this.#amount < other.amount)
            throw new ValidationError("Cannot subtract more than available amount.");
        return new Money({ amount: this.#amount - other.amount, currency: this.#currency });
    }

    /**
     * Multiplies the monetary amount by a multiplier.
     * @param {number} multiplier - The multiplier (must be non-negative).
     * @returns {Money} A new Money instance with the multiplied amount.
     * @throws {ValidationError} If multiplier is not a non-negative finite number.
     */
    multiply(multiplier) {
        if (typeof multiplier !== 'number' || !Number.isFinite(multiplier) || multiplier < 0)
            throw new ValidationError("Multiplier must be a non-negative finite number.");
        return new Money({ amount: this.#amount * multiplier, currency: this.#currency });
    }

    /**
     * Returns a string representation of the monetary amount.
     * @returns {string} The formatted string representation (e.g., "USD10.50").
     */
    toString() {
        return `${this.#currency.code}${this.#amount.toFixed(2)}`;
    }

    /**
     * Compares this Money instance with another for equality.
     * @param {Money} other - The other Money instance to compare.
     * @returns {boolean} True if both instances have the same amount and currency, otherwise false.
     */
    equals(other) {
        return other instanceof Money &&
            this.#amount === other.amount && this.#currency.equals(other.currency);
    }
}