// Handles rendering the transactions in the UI and managing the delete functionality.
import { getTransactions } from '../data/dataManager.js';

export function renderTransactions(transactionsToRender = getTransactions()) {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = ''; // Clear the list before rendering

    transactionsToRender.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${transaction.category} - ${transaction.type}: $${transaction.amount}`;
        transactionList.appendChild(listItem);
    });
}
