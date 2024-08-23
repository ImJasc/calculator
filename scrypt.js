let total = 0, numberOne, numberTwo = null, operator = null, isDecimal = false;
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

btnDecimal.addEventListener("click", recordDecimal =>{
    if(isDecimal === false){
        isDecimal = true;
        dspInput.innerText += btnDecimal.innerText;        
    }
})


btnClear.addEventListener("click", cleanScreen =>{
    dspInput.innerText = '0';
    numberOne = null;
    numberTwo = null;
    isDecimal = false;
    operator = null;
})

btnErase.addEventListener("click", eraseCharacter =>{    
    if (dspInput.textContent[dspInput.textContent.length-1] === '.') {
        isDecimal = false;
        dspInput.innerText = dspInput.innerText.slice(0, -1);
    }else if (dspInput.textContent.length === 1){
        dspInput.innerText = '0';
    }else{
        dspInput.innerText = dspInput.innerText.slice(0, -1);
    } 
        
})

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

