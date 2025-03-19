const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let firstOperand = null;
let operator = null;

buttons.forEach(button =>
{
    button.addEventListener('click', () =>
    {
        const value = button.textContent;

        if (button.classList.contains('number'))
        {
            currentInput += value;
            display.value = currentInput;
        }
        else if (button.classList.contains('operator'))
        {
            if (firstOperand === null)
            {
                firstOperand = parseFloat(currentInput);
            }
            else if (operator)
            {
                firstOperand = calculate(firstOperand, parseFloat(currentInput), operator);
            }
            operator = value;
            currentInput = '';
            display.value = firstOperand;
        }
        else if (value === '=')
        {
            if (firstOperand !== null && operator) {
                const result = calculate(firstOperand, parseFloat(currentInput), operator);
                display.value = result;
                currentInput = result.toString();
                firstOperand = null;
                operator = null;
            }
        }
        else if (value === 'C')
        {
            currentInput = '';
            firstOperand = null;
            operator = null;
            display.value = '';
        }
    });
});

function calculate(num1, num2, operator)
{
    switch (operator)
    {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case 'x':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num2;
    }
}