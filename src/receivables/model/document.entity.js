export class Document {
    constructor({
        id = 0,
        type = '',
        number = '',
        customer = '',
        description = '',
        amount = 0,
        currency = '',
        issueDate = '',
        dueDate = '',
        discountDate = '',
        status = '',
        partyId = 0,
        portfolioId = 0
                }) {
        this.id = id;
        this.type = type;
        this.number = number;
        this.customer = customer;
        this.description = description;
        this.amount = amount;
        this.currency = currency;
        this.issueDate = new Date(issueDate);
        this.dueDate = new Date(dueDate);
        this.discountDate = new Date(discountDate);
        this.status = status;
        this.partyId = partyId;
        this.portfolioId = portfolioId;
    }

    getFormattedIssueDate() {
        return this.issueDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    getFullFormattedIssueDate() {
        let dateAsString = this.issueDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        let timeAsString = this.issueDate.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        return `on ${dateAsString} at ${timeAsString}`;
    }
}