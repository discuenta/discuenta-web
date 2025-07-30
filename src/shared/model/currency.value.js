import {ValidationError} from "./errors.entity.js";

/**
 * Represents a currency with a valid code.
 * @author Salim Ramirez
 */
export class Currency {
    /**
     * @type {string[]} List of valid currency codes.
     * @private
     */
    static #VALID_CODES = ["USD", "EUR", "GBP", "JPY", "PEN"];

    /**
     * @type {string} The currency code.
     * @private
     */
    #code;

    /**
     * Creates an instance of Currency.
     * @param {string} code - The currency code.
     * @throws {ValidationError} If the provided code is not valid.
     */
    constructor(code) {
        if (!Currency.#VALID_CODES.includes(code)) {
            throw new ValidationError(
                `Invalid currency code: ${code}. Valid codes are: ${Currency.#VALID_CODES.join(', ')}`
            );
        }
        this.#code = code;
    }

    /**
     * Gets the currency code.
     * @returns {string} The currency code.
     */
    get code() {
        return this.#code;
    }

    /**
     * Compares this Currency with another for equality.
     * @param {Currency} other - The other Currency to compare.
     * @returns {boolean} True if the two Currency instances are equal, otherwise false.
     */
    equals(other) {
        return other instanceof Currency && this.#code === other.code;
    }
}