import {ValidationError} from "../../shared/model/errors.entity.js";

/**
 * Enumeration class representing the status of a document.
 * Provides predefined status instances and validation methods.
 * @author Salim Ramirez
 */
export class DocumentStatus {
    /**
     * @type {DocumentStatus} Pending status instance.
     * @static
     */
    static PENDING = new DocumentStatus('Pending');

    /**
     * @type {DocumentStatus} Discounted status instance.
     * @static
     */
    static DISCOUNTED = new DocumentStatus('Discounted');

    /**
     * @type {DocumentStatus} Cancelled status instance.
     * @static
     */
    static CANCELLED = new DocumentStatus('Cancelled');

    /**
     * @type {string} The status value.
     * @private
     */
    #status;

    /**
     * Creates an instance of DocumentStatus.
     * @param {string} status - The status value.
     */
    constructor(status) {
        this.#status = status;
    }

    /**
     * Gets the status value.
     * @returns {string} The status value.
     */
    get status() {
        return this.#status;
    }

    /**
     * Compares this DocumentStatus with another for equality.
     * @param {DocumentStatus} other - The other DocumentStatus to compare.
     * @returns {boolean} True if the two DocumentStatus instances are equal, otherwise false.
     */
    equals(other) {
        return other instanceof DocumentStatus && this.#status === other.status;
    }

    /**
     * Creates a DocumentStatus instance from a string value.
     * @param {string} statusString - The status string to convert.
     * @returns {DocumentStatus} The corresponding DocumentStatus instance.
     * @throws {ValidationError} If the provided status string is not valid.
     * @static
     */
    static fromString(statusString) {
        const statuses = [this.PENDING, this.DISCOUNTED, this.CANCELLED];
        const found = statuses.find(status => status.status === statusString);
        if (!found) {
            throw new ValidationError(
                `Invalid document status: ${statusString}. Valid statuses are: ${statuses.map(s => s.status).join(', ')}`
            );
        }
        return found;
    }
}