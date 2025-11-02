// Manages the application's transactions, including adding, deleting, and retrieving transactions.

export const transactions = [];

export function addTransaction(transaction) {
    transactions.push(transaction);
}

export function getTransactions() {
    return transactions;
}
