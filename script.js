let firstNum;
let secondNum;
let operator;

function operate(firstNum, operator, secondNum) {
    if (operator === "+") {
        addResult = firstNum + secondNum;
        console.log(addResult);
        return addResult;
    } else if (operator === "-") {
        subtractResult = firstNum - secondNum;
        console.log(subtractResult);
        return subtractResult;
    } else if (operator === "*") {
        multiplyResult = firstNum * secondNum;
        console.log(multiplyResult);
        return multiplyResult;
    } else {
        divideResult = firstNum / secondNum;
        console.log(divideResult);
        return divideResult;
    }
    
}

operate(3, "*", 6)