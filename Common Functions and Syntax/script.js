
// Named function for addition
function add(a, b) {
    return a + b;
};

// Anonymous function for subtraction
const subtract = function(a, b) {
    // TODO: Implement subtraction
    return a-b;
};

// Arrow function for multiplication
const multiply = (a, b) => {
    // TODO: Implement multiplication
    return a*b;
};

// Named function for division
function divide(a, b) {
    // TODO: Implement division with check for division by zero
    if (b===0) {
        return 'Error';
    }
    return a/b;
}

// Calculator object with methods
const calculator = {
    equation: '',
    add,
    subtract,
    multiply,
    divide,

    updateEquation: function(value) {
        // TODO: Implement update equation logic
        this.equation += value;
        document.getElementById('equation').value = this.equation;
    },
    clearEquation: function() {
        // TODO: Implement clear equation logic
        this.equation = '';
        document.getElementById('equation').value = this.equation;
    },
    calculate: function() {
        const equation = this.equation.split(' ');
        const a = parseFloat(equation[0]);
        const operation = equation[1];
        const b = parseFloat(equation[2]);
        let result;

        switch (operation) {
            case '+':
                result = this.add(a,b)
                break;
            case '-':
                result = this.subtract(a,b)
                break;
            case '*':
                result = this.multiply(a,b)
                break;
            case '/':
                result = this.divide(a,b)
                break;
            default:
                result = 'Invalid Operation';
        }

        this.updateEquation(` = ${result}`);
    }
};

// Event listeners
document.querySelectorAll('button[name="input"]').forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;
        // TODO: Add call to updateEquation and pass value as an argument
        calculator.updateEquation(value);
    });
});

document.querySelectorAll('button[name="operation"]').forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;
        // TODO: Add call to updateEquation and pass value as an argument
        // NOTE: This passes the selected operation as part of a text string
        calculator.updateEquation(` ${value} `);
    });
});

document.querySelector('button[name="calculate"]').addEventListener('click', () => {
    // TODO: Add call to calculate() result and update display
    calculator.calculate();
});

document.querySelector('button[name="clear"]').addEventListener('click', () => {
    // TODO: Clear the display
    calculator.clearEquation();
});
