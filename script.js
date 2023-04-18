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

const displayBox = document.querySelector("output");

const btnZero = document.querySelector(".zero")
const btnOne = document.querySelector(".one")
const btnTwo = document.querySelector(".two")
const btnThree = document.querySelector(".three")
const btnFour = document.querySelector(".four")
const btnFive = document.querySelector(".five")
const btnSix = document.querySelector(".six")
const btnSeven = document.querySelector(".seven")
const btnEight = document.querySelector(".eight")
const btnNine = document.querySelector(".nine")

btnZero.addEventListener("click", () => {
    document.getElementById("output").value = "0";
});

btnOne.addEventListener("click", () => {
    document.getElementById("output").value = "1";
});

btnTwo.addEventListener("click", () => {
    document.getElementById("output").value = "2";
});

btnThree.addEventListener("click", () => {
    document.getElementById("output").value = "3";
});

btnFour.addEventListener("click", () => {
    document.getElementById("output").value = "4";
});

btnFive.addEventListener("click", () => {
    document.getElementById("output").value = "5";
});

btnSix.addEventListener("click", () => {
    document.getElementById("output").value = "6";
});

btnSeven.addEventListener("click", () => {
    document.getElementById("output").value = "7";
});

btnEight.addEventListener("click", () => {
    document.getElementById("output").value = "8";
});

btnNine.addEventListener("click", () => {
    document.getElementById("output").value = "9";
});