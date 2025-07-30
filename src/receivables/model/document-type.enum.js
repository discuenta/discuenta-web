import {ValidationError} from "../../shared/model/errors.entity.js";

/**
 * Enumeration class representing the type of document.
 * Provides predefined document type instances and validation methods.
 * @author Salim Ramirez
 */
export class DocumentType {
    /**
     * @type {DocumentType} Draft document type instance.
     * @static
     */
    static DRAFT = new DocumentType('Draft');

    /**
     * @type {DocumentType} Invoice document type instance.
     * @static
     */
    static INVOICE = new DocumentType('Invoice');

    /**
     * @type {string} The value of the document type.
     * @private
     */
    #type;

    /**
     * Creates an instance of DocumentType.
     * @param {string} type - The document type value.
     * @private
     */
    constructor(type) {
        this.#type = type;
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

    /**
     * Creates a DocumentType instance from a string value.
     * @param {string} typeString - The string representation of the document type.
     * @returns {DocumentType} The corresponding DocumentType instance.
     * @throws {ValidationError} If the provided value is not a valid document type.
     * @static
     */
    static fromString(typeString) {
        const types = [this.DRAFT, this.INVOICE];
        const found = types.find(type => type.type === typeString);
        if (!found) {
            throw new ValidationError(
                `Invalid document type: ${typeString}. Valid types are: ${types.map(t => t.type).join(', ')}`
            );
        }
        return found;
    }
}