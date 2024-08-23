let total = 0, numberOne, numberTwo = null;
const btnNumbers = document.querySelectorAll("button#number");
const dspInput = document.querySelector("div#input");
const dspOutput = document.querySelector("div#output");
const btnClear = document.querySelector("button#clear");
const btnErase = document.querySelector("button#erase");
const btnPercent = document.querySelector("button#percent");
const btnOperation = document.querySelectorAll("button#operation");
const btnDecimal = document.querySelector("button#decimal");
const btnEqual = document.querySelector("button#equal");

btnNumbers.forEach((button) => button.addEventListener("click", recordNumber => {
    if (dspInput.innerText === '0') {
        dspInput.innerText = '';
        dspInput.innerText += button.innerText;
    }else{
        dspInput.innerText += button.innerText;
    }
}));

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

