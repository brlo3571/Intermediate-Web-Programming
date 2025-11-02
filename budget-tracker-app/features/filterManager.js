// filterManager.js
// Handles filtering transactions based on the selected type (Income or Expense).
// TODO: Import dataManager.js
import { getTransactions } from "../data/dataManager.js";
// TODO: Implement the function to filter transactions based on the selected type
export function filterTransactionsByType(type) {
    // TODO: Return transactions filtered by type (Income or Expense)
    // Hint: Use the filter() method filter transactions based on the selected type
    const transactions = getTransactions();
    if (type === 'all'){
        return transactions;
    }
    // Hint: The placeholder below provides the app with basic functionality. 
    // TODO: Replace this placeholder logic with code that filters transactions based on the selected type (e.g., Income or Expense)
    return transactions.filter(transaction => transaction.type.toLowerCase() === type);
}

/* Check the section "Filtering by Transaction Type" in the article "Building Modular Apps with ES6" for detailed guidance on setting up filtering functionality using a modular approach. */