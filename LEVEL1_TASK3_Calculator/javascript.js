document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');

    let currentInput = '';
    let operator = '';
    let previousInput = '';
    let displayValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            
            if (value >= '0' && value <= '9' || value === '.') {
                currentInput += value;
                displayValue += value;
                display.textContent = displayValue;
            } else if (value === '+' || value === '-' || value === '*' || value === '/') {
                if (currentInput === '') return;
                operator = value;
                previousInput = currentInput;
                currentInput = '';
                displayValue += ` ${value} `;
                display.textContent = displayValue;
            }
        });
    });

    clearButton.addEventListener('click', function() {
        currentInput = '';
        previousInput = '';
        operator = '';
        displayValue = '';
        display.textContent = '0';
    });

    equalsButton.addEventListener('click', function() {
        if (currentInput === '' || previousInput === '') return;

        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }

        display.textContent = result;
        currentInput = result.toString();
        operator = '';
        previousInput = '';
        displayValue = result.toString();
    });
});
