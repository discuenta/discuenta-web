/**
 * Custom error class for handling validation errors.
 * @extends {Error}
 * @author Salim Ramirez
 */
export class ValidationError extends Error {
    /**
     * Creates an instance of ValidationError.
     * @param {string} message - The error message.
     */
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}