function calculator () {

    let operator;
    let firstNum = 0;
    let secondNum = 0;

    function operate(firstNum, operator, secondNum) {
    if (operator === "+") {
        addResult = firstNum + secondNum;
        newAddResult = Number(addResult.toFixed(9));
        return newAddResult;
    } else if (operator === "-") {
        subtractResult = firstNum - secondNum;
        newSubResult = Number(subtractResult.toFixed(9));
        return newSubResult;
    } else if (operator === "*") {
        multiplyResult = firstNum * secondNum;
        newMultResult = Number(multiplyResult.toFixed(9));
        return newMultResult;
    } else {
        divideResult = firstNum / secondNum;
        newDivResult = Number(divideResult.toFixed(9));
        if (secondNum === 0) {
            return "That's a no from me, dawg.";
        }
        return newDivResult;
    }

    }

    const displayBox = document.querySelector("output");

    const btnZero = document.querySelector(".zero");
    const btnOne = document.querySelector(".one");
    const btnTwo = document.querySelector(".two");
    const btnThree = document.querySelector(".three");
    const btnFour = document.querySelector(".four");
    const btnFive = document.querySelector(".five");
    const btnSix = document.querySelector(".six");
    const btnSeven = document.querySelector(".seven");
    const btnEight = document.querySelector(".eight");
    const btnNine = document.querySelector(".nine");
    const btnAdd = document.querySelector(".add");
    const btnSubtract = document.querySelector(".subtract");
    const btnDivide = document.querySelector(".divide");
    const btnMultiply = document.querySelector(".multiply");
    const btnEquals = document.querySelector(".equals");
    const btnClear = document.querySelector(".clear");
    const btnDecimal = document.querySelector(".decimal");
    const btnNegative = document.querySelector(".negative");
    const btnPercent = document.querySelector(".percent");
    const allButtons = document.querySelectorAll("button")


    let displayNum = document.getElementById("output").textContent = "0";
    displayNum = "";


    btnZero.addEventListener("click", () => {
        displayNum = displayNum + btnZero.value;
        document.getElementById("output").textContent = displayNum;
    });

    btnOne.addEventListener("click", () => {
        displayNum = displayNum + btnOne.value;
        document.getElementById("output").textContent = displayNum;
    });

    btnTwo.addEventListener("click", () => {
        displayNum = displayNum + btnTwo.value;
        document.getElementById("output").textContent = displayNum;
    });

    btnThree.addEventListener("click", () => {
        displayNum = displayNum + btnThree.value;
        document.getElementById("output").textContent = displayNum;
    });

    btnFour.addEventListener("click", () => {
        displayNum = displayNum + btnFour.value;
        document.getElementById("output").textContent = displayNum;
    });

    btnFive.addEventListener("click", () => {
        displayNum = displayNum + btnFive.value;
        document.getElementById("output").textContent = displayNum;
    });

    btnSix.addEventListener("click", () => {
        displayNum = displayNum + btnSix.value;
        document.getElementById("output").textContent = displayNum;
    });

    btnSeven.addEventListener("click", () => {
        displayNum = displayNum + btnSeven.value;
        document.getElementById("output").textContent = displayNum;
    });

    btnEight.addEventListener("click", () => {
        displayNum = displayNum + btnEight.value;
        document.getElementById("output").textContent = displayNum;
    });

    btnNine.addEventListener("click", () => {
        displayNum = displayNum + btnNine.value;
        document.getElementById("output").textContent = displayNum;
    });

    btnDecimal.addEventListener("click", () => {
        displayNum = displayNum + btnDecimal.value;
        document.getElementById("output").textContent = displayNum;
        btnDecimal.disabled = true;
    });

    function decimalEnable () {
        btnDecimal.disabled = false;
    }

    btnAdd.addEventListener("click", () => {
        if (displayNum === "") {
            document.getElementById("output").textContent = result;
        } else if (firstNum) {
            secondNum = parseFloat(displayNum);
            result = operate(firstNum, operator, secondNum);
            firstNum = result;
            document.getElementById("output").textContent = result;
            displayNum = "";
            operator = "+";

        } else {
            firstNum = parseFloat(displayNum);
            displayNum = "";
            operator = "+";
            decimalEnable();
        }
    });

    btnSubtract.addEventListener("click", () => {
        if (displayNum === "") {
            document.getElementById("output").textContent = result;
        } else if (firstNum) {
            secondNum = parseFloat(displayNum);
            result = operate(firstNum, operator, secondNum);
            firstNum = result;
            document.getElementById("output").textContent = result;
            displayNum = "";
            operator = "-";

        } else {
            firstNum = parseFloat(displayNum);
            displayNum = "";
            operator = "-";
            decimalEnable();
        }
    });

    btnDivide.addEventListener("click", () => {
        if (displayNum === "") {
            document.getElementById("output").textContent = result;
        } else if (firstNum) {
            secondNum = parseFloat(displayNum);
            result = operate(firstNum, operator, secondNum);
            firstNum = result;
            document.getElementById("output").textContent = result;
            displayNum = "";
            operator = "/";

        } else {
            firstNum = parseFloat(displayNum);
            displayNum = "";
            operator = "/";
            decimalEnable();
        }
    });

    btnMultiply.addEventListener("click", () => {
        if (displayNum === "") {
            document.getElementById("output").textContent = result;
        } else if (firstNum) {
            secondNum = parseFloat(displayNum);
            result = operate(firstNum, operator, secondNum);
            firstNum = result;
            document.getElementById("output").textContent = result;
            displayNum = "";
            operator = "*";

        } else {
            firstNum = parseFloat(displayNum);
            displayNum = "";
            operator = "*";
            decimalEnable();
        }
    });

    btnEquals.addEventListener("click", () => {
        secondNum = parseFloat(displayNum);
        result = operate(firstNum, operator, secondNum);
        document.getElementById("output").textContent = result;
        displayNum = result;
        decimalEnable();
        allButtons.forEach(button => {
            button.disabled = true;
        });
        btnClear.disabled = false;
        btnPercent.disabled = false;
    });


    btnClear.addEventListener("click", () => {
        firstNum = 0;
        secondNum = 0;
        displayNum = "0";
        document.getElementById("output").textContent = displayNum;
        displayNum = "";
        allButtons.forEach(button => {
            button.disabled = false;
        });
    });

    btnNegative.addEventListener("click", () => {
        negativeNum = displayNum * -1;
        document.getElementById("output").textContent = negativeNum;
        displayNum = negativeNum;
    });

    btnPercent.addEventListener("click", () => {
        percentNum = displayNum / 100;
        document.getElementById("output").textContent = percentNum;
        displayNum = percentNum;
    })


    };

calculator();


