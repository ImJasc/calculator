let final= false, numberOne = null, numberTwo = null, operator = null, isDecimal = false;
const btnNumbers = document.querySelectorAll("button#number");
const dspInput = document.querySelector("div#input");
const dspOutput = document.querySelector("div#output");
const btnClear = document.querySelector("button#clear");
const btnErase = document.querySelector("button#erase");
const btnPercent = document.querySelector("button#percent");
const btnOperation = document.querySelectorAll("button#operation");
const btnDecimal = document.querySelector("button#decimal");
const btnEqual = document.querySelector("button#equals");

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
});


btnClear.addEventListener("click", cleanScreen =>{
    dspInput.innerText = '0';
    dspOutput.innerText = '';
    numberOne = null;
    numberTwo = null;
    isDecimal = false;
    operator = null;
    final = false;
});

btnErase.addEventListener("click", eraseCharacter =>{    
    if (dspInput.textContent[dspInput.textContent.length-1] === '.') {
        isDecimal = false;
        dspInput.innerText = dspInput.innerText.slice(0, -1);
    }else if (dspInput.textContent.length === 1){
        dspInput.innerText = '0';
    }else{
        dspInput.innerText = dspInput.innerText.slice(0, -1);
    } 
        
});

btnPercent.addEventListener("click", opePercent =>{
    if (numberOne === null) {
        numberOne = Number(dspInput.innerText)/100;
        dspOutput.innerText = numberOne;
        dspInput.innerText = '';
    }else if (numberOne !== null && operator !== null && numberTwo !== null){
        percentage(numberOne, operator, numberTwo);
    }else if (numberOne !== null && operator !== null && numberTwo === null){
        numberTwo = Number(dspInput.innerText);
        percentage(numberOne, operator, numberTwo);
    }    
});

btnOperation.forEach((button) => button.addEventListener("click", getOperator => {
    if(operator === null){
        numberTwo = null;        
        operator = button.innerText;
        final = false;
        Equal();
    }else{
        numberTwo = null;
        final = false;
        Equal()
        operator = button.innerText; 
        dspOutput.innerText = numberOne + ' ' + operator;       
    }
}));

btnEqual.addEventListener("click", getequal =>{
    final = true;
    if (dspInput.innerText !== '') {
        numberTwo = Number(dspInput.innerText);   
    }    
    Equal();
});

function Equal() {
    if (numberOne !== null && operator !== null && numberTwo !== null) {
        operate(numberOne, operator, numberTwo);  

        if (final === true) {
            dspOutput.innerText = numberOne;    
            dspInput.innerText = '';
        }else{
            dspOutput.innerText = numberOne;
            dspInput.innerText = '0';   
        }        
    }else if (numberOne !== null && operator !== null && numberTwo === null && dspInput !== '0') {
        numberTwo = dspInput.innerText;
        operate(numberOne, operator, numberTwo);

        if (final === true) {
            dspOutput.innerText = numberOne;
            dspInput.innerText = '';    
        }else{
            dspOutput.innerText = numberOne + ' ' + operator;
            dspInput.innerText = '0';   
        }        
    }else if (numberOne !== null && numberTwo === null && dspInput ==='0'){        
        if (final === true) {
            dspOutput.innerText = numberOne;    
            dspInput.innerText = '';
        }else{
            dspOutput.innerText = numberOne + ' ' + operator;
            dspInput.innerText = '0';   
        }        
    }else if(numberOne === null){
        numberOne = Number(dspInput.innerText);

        if (final === true) {
            dspOutput.innerText = numberOne;    
            dspInput.innerText = '';
        }else{
            dspOutput.innerText = numberOne + ' ' + operator;
            dspInput.innerText = '0';   
        }                
        
    }
}


function percentage (numOne, operator, numTwo){
    switch (operator){
        case 'x':
            total = numOne * (numTwo/100);
            break;
        case '÷':
            total = numOne / (numTwo/100);
            break;
        case '+':
            total = numOne + (numTwo * numOne) / 100 ;
            break;
        case '-':
            total = numOne - (numTwo * numOne) / 100;
            break;
    }
    return total;
}

function operate (numOne, ope, numTwo){
    switch (ope){
        case 'x':
            numberOne = Number(numOne) * Number(numTwo);                                          
        break;
        case '÷':
            if (numTwo !== 0) {
                numberOne = Number(numOne) / Number(numTwo);                
            }else{
                dspOutput.innerText = "ERROR!";
                numOne = null;
                numTwo = null;
                operator = null;
                dspInput.innerText = '';
            }
        break;
        case '+':
            numberOne = Number(numOne) + Number(numTwo);            
        break;
        case '-':
            numberOne = Number(numOne) - Number(numTwo);            
        break;
    }
    
}

