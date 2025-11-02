// sortManager.js
// Handles sorting transactions by category or amount.
// TODO: Implement the function to sort transactions based on the selected option (Category or Amount)
export function sortTransactions(transactions, sortOption) {
    // TODO: Sort transactions by the selected option (category or amount)
    // Hint: Use the sort() method, and consider comparing category strings alphabetically or amount numerically.
    if (sortOption === 'none') {
        return transactions;
    }
    // Placeholder functionality that allows the app to continue working:
    // TODO: Replace this placeholder logic with code that sorts transactions based on the selected value (e.g., Category or Amount values)
    const sortedTransactions = [...transactions];
    if (sortOption === 'category') {
        sortedTransactions.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortOption === 'amount') {
        sortedTransactions.sort((a, b) => a.amount - b.amount);
    }

    return sortedTransactions;
}




/* The section "Sorting Tasks by Priority" in "Building Modular Apps with ES6" offers an example that can help you understand how to implement sorting. This logic can be adapted for sorting transactions by category or amount in the Budget Tracker app. */