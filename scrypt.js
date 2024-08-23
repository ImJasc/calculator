let total = 0, numberOne, numberTwo = null;
const btnNumbers = document.getElementById("number");
const dspInput = document.getElementById("input");
const dspOutput = document.getElementById("output");
const btnClear = document.getElementById("clear");
const btnErase = document.getElementById("erase");
const btnPercent = document.getElementById("percent");
const btnOperation = document.getElementById("operation");
const btnDecimal = document.getElementById("decimal");
const btnEqual = document.getElementById("equal");
function operate (operator, numOne, numTwo){
    switch (operator){
        case '*':
            total = numOne * numTwo;
            break;
        case '/':
            total = numOne / numTwo;
            break;
        case '+':
            total = numOne + numTwo;
            break;
        case '-':
            total = numOne - numTwo;
            break;
    }
    return total;
}

