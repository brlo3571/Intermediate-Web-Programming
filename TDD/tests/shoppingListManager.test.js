const { addItem, removeItem, getItems, clearList } = require('../src/shoppingListManager');

beforeEach(() => {
    clearList();
});
//
//
//
//
// addItem tests
test('addItem should add an item to the list', () => {
    addItem('Milk');
    expect(getItems()).toContain('Milk');
});

test('addItem should ignore invalid inputs', () => {
    const invalidInputs = ['', '   ', null, undefined, 123, {}, []];

    invalidInputs.forEach(input => {
        addItem(input);
    });

    invalidInputs.forEach(input => {
        expect(getItems()).not.toContain(input);
    });
});

test('addItem strings have spaces trimmed', () => {
    addItem('Apples');
    expect(getItems()).toEqual(['Apples']);
})
//
//
//
//
// removeItem test
test('removeItem should remove an item from the list', () => {
    addItem('Bread');
    removeItem(0);
    expect(getItems()).toEqual([]);

});

test('removeItem should not change the list if index is negative', () => {
    addItem('Bread');
    addItem('Eggs');

    removeItem(-1);

    expect(getItems()).toEqual(['Bread', 'Eggs']);
    expect(getItems()).toHaveLength(2);
});

test('removeItem should not change the list if index is too high', () => {
    addItem('Bread');
    addItem('Eggs');
    removeItem(5);
    expect(getItems()).toEqual(['Bread', 'Eggs']);
    expect(getItems()).toHaveLength(2);
});
//
//
//
//
test('getItems returns the correct list of items after multiple additions and removals', () => {
    addItem('Milk');
    addItem('Eggs');
    removeItem(1);
    getItems();
    expect(getItems()).toEqual(['Milk']);
});
// clearList tests
test('clearList should remove all items from the list', () => {
    addItem('Milk');
    addItem('Eggs');
    clearList();
    expect(getItems()).toEqual([]);
});
