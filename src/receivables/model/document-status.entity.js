import {ValidationError} from "../../shared/model/errors.entity.js";

/**
 * Represents the status of a document.
 */
export class DocumentStatus {
    /**
     * @type {Object<string, string>} Valid document statuses.
     * @private
     */
    static #VALID_STATUSES = {
        PENDING: 'Pending',
        DISCOUNTED: 'Discounted',
        CANCELLED: 'Cancelled'
    }

    /**
     * @type {string} The current status of the document.
     * @private
     */
    #status;

    /**
     * Creates an instance of DocumentStatus.
     * @param {string} status - The initial status of the document.
     * @throws {ValidationError} If the provided status is not valid.
     */
    constructor(status) {
        this.#validateStatus(status);
        this.#status = status;
    }

    /**
     * Validates the provided document status.
     * @param {string} status - The status to validate.
     * @throws {ValidationError} If the status is not valid.
     * @private
     */
    #validateStatus(status) {
        if (!Object.values(DocumentStatus.#VALID_STATUSES).includes(status)) {
            throw new ValidationError(
                `Invalid document status: ${status}. Valid statuses are: ${Object.values(DocumentStatus.#VALID_STATUSES).join(', ')}`
            );
        }
    }

    /**
     * Gets the current status of the document.
     * @returns {string} The current document status.
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
}