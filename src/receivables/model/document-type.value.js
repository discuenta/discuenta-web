import {ValidationError} from "../../shared/model/errors.entity.js";

/**
 * Represents a type of document.
 * @author Salim Ramirez
 */
export class DocumentType {
    /**
     * @type {Object<string, string>} Valid document types.
     * @private
     */
    static #VALID_TYPES = {
        DRAFT: 'Draft',
        INVOICE: 'Invoice'
    }

    /**
     * @type {string} The value of the document type.
     * @private
     */
    #type;

    /**
     * Creates an instance of DocumentType.
     * @param {string} type - The document type value.
     * @throws {ValidationError} If the provided value is not a valid document type.
     */
    constructor(type) {
        this.#validateType(type);
        this.#type = type;
    }

    /**
     * Validates the provided document type.
     * @param {string} type - The document type to validate.
     * @throws {ValidationError} If the type is not valid.
     * @private
     */
    #validateType(type) {
        if (!Object.values(DocumentType.#VALID_TYPES).includes(type)) {
            throw new ValidationError(
                `Invalid document type: ${type}. Valid types are: ${Object.values(DocumentType.#VALID_TYPES).join(', ')}`
            );
        }
    }

    /**
     * Gets the value of the document type.
     * @returns {string} The document type value.
     */
    get type() {
        return this.#type;
    }

    /**
     * Compares this DocumentType with another for equality.
     * @param {DocumentType} other - The other DocumentType to compare.
     * @returns {boolean} True if the two DocumentType instances are equal, otherwise false.
     */
    equals(other) {
        return other instanceof DocumentType && this.#type === other.type;
    }
}