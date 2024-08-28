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
    if (dspOutput.innerText !== 'ERROR!') {
        if (dspInput.innerText === '0') {
            dspInput.innerText = '';
            dspInput.innerText += button.innerText;
        }else{
            dspInput.innerText += button.innerText;
        }   
    }    
}));

btnDecimal.addEventListener("click", recordDecimal =>{
    if (dspOutput.innerText !== 'ERROR!') {
        if(isDecimal === false){
            isDecimal = true;
            dspInput.innerText += btnDecimal.innerText;        
        }
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
    if (dspOutput.innerText !== 'ERROR!') {
        if (dspInput.textContent[dspInput.textContent.length-1] === '.') {
            isDecimal = false;
            dspInput.innerText = dspInput.innerText.slice(0, -1);
        }else if (dspInput.textContent.length === 1){
            dspInput.innerText = '0';
        }else{
            dspInput.innerText = dspInput.innerText.slice(0, -1);
        } 
    }
});

btnPercent.addEventListener("click", opePercent =>{
    if (dspOutput.innerText !== 'ERROR!') {
        if (numberOne === null) {
            numberOne = Number(dspInput.innerText)/100;
            dspOutput.innerText = numberOne;
            dspInput.innerText = '';
        }else if (numberOne !== null && operator !== null){
            numberTwo = Number(dspInput.innerText);
            percentage(numberOne, operator, numberTwo);
            dspOutput.innerText = numberOne;
            dspInput.innerText = '';
            operator = null;
        }
    }    
});

btnOperation.forEach((button) => button.addEventListener("click", getOperator => {
    if (dspOutput.innerText !== 'ERROR!') {
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
    }
}));

btnEqual.addEventListener("click", getequal =>{
    if (dspOutput.innerText !== 'ERROR!') {
        final = true;
        if (dspInput.innerText !== '' || dspOutput.innerText !== 'ERROR!') {
            numberTwo = Number(dspInput.innerText);   
        }    
        Equal();
    }
});

function Equal() {   
    if (numberOne !== null && operator !== null && dspInput !== '0') {
        numberTwo = dspInput.innerText;
        operate(numberOne, operator, numberTwo);
        if (dspOutput.innerText !== 'ERROR!') {
            if (final === true) {
                dspOutput.innerText = numberOne;
                dspInput.innerText = '';    
            }else{
                dspOutput.innerText = numberOne + ' ' + operator;
                dspInput.innerText = '0';   
            } 
        }              
    }else if (numberOne !== null && operator !== null && dspInput ==='0'){        
        if (dspOutput.innerText !== 'ERROR!') {
            if (final === true) {
                dspOutput.innerText = numberOne;    
                dspInput.innerText = '';
            }else{
                dspOutput.innerText = numberOne + ' ' + operator;
                dspInput.innerText = '0';   
            } 
        }              
    }else if(numberOne === null){
        if (dspOutput.innerText !== 'ERROR!') {
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
}


function percentage (numOne, operator, numTwo){
    switch (operator){
        case 'x':
            numberOne = numOne * (numTwo/100);
            break;
        case '÷':
            if (Number(numTwo) === 0) {
                dspOutput.innerText = numberOne;                
                numTwo = null;
                operator = null;                
            }else{
                numberOne = numOne / (numTwo/100);
            }
            break;
        case '+':
            numberOne = numOne + (numTwo * numOne) / 100 ;
            break;
        case '-':
            numberOne = numOne - (numTwo * numOne) / 100;
            break;
    }
}

function operate (numOne, ope, numTwo){
    switch (ope){
        case 'x':
            numberOne = Number(numOne) * Number(numTwo);                                          
        break;
        case '÷':
            if (Number(numTwo) === 0) {
                dspOutput.innerText = "ERROR!";
                numOne = null;
                numTwo = null;
                operator = null;
                dspInput.innerText = '';
            }else{                
                numberOne = Number(numOne) / Number(numTwo);                
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

