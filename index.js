// let expression = '';

// function appendToDisplay(value) {
//     expression += value;
//     document.getElementById('display').value = expression;
// }

// function clearDisplay() {
//     expression = '';
//     document.getElementById('display').value = '';
// }

// function calculate() {
//     try {
//         const result = eval(expression);
//         document.getElementById('display').value = result;
//         expression = '';
//     } catch (error) {
//         document.getElementById('display').value = 'Error';
//         expression = '';
//     }
// }

let expression = '';

function appendToDisplay(value) {
    expression += value;
    document.getElementById('display').value = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById('display').value = '';
}

function backspace() {
    expression = expression.slice(0, -1);
    document.getElementById('display').value = expression;
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('display').value = result;
        expression = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
        expression = '';
    }
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.', 'Enter'].includes(key)) {
        event.preventDefault();
        if (key === 'Enter') {
            calculate();
        } else {
            appendToDisplay(key);
        }
    } else if (key === 'Backspace') {
        event.preventDefault();
        backspace();
    }
});
