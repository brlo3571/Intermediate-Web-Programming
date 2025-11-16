// shoppingListManager.js
const shoppingList = [];

function addItem(item) {
    if (typeof item === 'string' && item.trim()) {
        shoppingList.push(item.trim());
    }
}

function removeItem(index) {
    if (index >= 0 && index < shoppingList.length) {
        shoppingList.splice(index, 1);
    }
}

function getItems() {
    return shoppingList;
}

function clearList() {
    shoppingList.length = 0;
}



module.exports = { addItem, removeItem, getItems, clearList };

