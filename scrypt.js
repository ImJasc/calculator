let total = 0, numberOne, numberTwo = null;
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