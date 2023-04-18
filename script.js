function calculator () {

    let operator;
    let firstNum = 0;
    let secondNum = 0;

    function operate(firstNum, operator, secondNum) {
    if (operator === "+") {
        addResult = firstNum + secondNum;
        return addResult;
    } else if (operator === "-") {
        subtractResult = firstNum - secondNum;
        return subtractResult;
    } else if (operator === "*") {
        multiplyResult = firstNum * secondNum;
        return multiplyResult;
    } else {
        divideResult = firstNum / secondNum;
        return divideResult;
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

    let displayNum = document.getElementById("output").value;


    btnZero.addEventListener("click", () => {
        displayNum = displayNum + btnZero.value;
        document.getElementById("output").value = displayNum;
    });

    btnOne.addEventListener("click", () => {
        displayNum = displayNum + btnOne.value;
        document.getElementById("output").value = displayNum;
    });

    btnTwo.addEventListener("click", () => {
        displayNum = displayNum + btnTwo.value;
        document.getElementById("output").value = displayNum;
    });

    btnThree.addEventListener("click", () => {
        displayNum = displayNum + btnThree.value;
        document.getElementById("output").value = displayNum;
    });

    btnFour.addEventListener("click", () => {
        displayNum = displayNum + btnFour.value;
        document.getElementById("output").value = displayNum;
    });

    btnFive.addEventListener("click", () => {
        displayNum = displayNum + btnFive.value;
        document.getElementById("output").value = displayNum;
    });

    btnSix.addEventListener("click", () => {
        displayNum = displayNum + btnSix.value;
        document.getElementById("output").value = displayNum;
    });

    btnSeven.addEventListener("click", () => {
        displayNum = displayNum + btnSeven.value;
        document.getElementById("output").value = displayNum;
    });

    btnEight.addEventListener("click", () => {
        displayNum = displayNum + btnEight.value;
        document.getElementById("output").value = displayNum;
    });

    btnNine.addEventListener("click", () => {
        displayNum = displayNum + btnNine.value;
        document.getElementById("output").value = displayNum;
    });

    btnDecimal.addEventListener("click", () => {
        displayNum = displayNum + btnDecimal.value;
        document.getElementById("output").value = displayNum;
        btnDecimal.disabled = true;
    });

    function decimalEnable () {
        btnDecimal.disabled = false;
    }

    btnAdd.addEventListener("click", () => {
        if (firstNum) {
            secondNum = parseFloat(displayNum);
            console.log("secondNum:", secondNum);
            result = operate(firstNum, operator, secondNum);
            console.log("result:", result);
            firstNum = result;
            console.log("firstNum now:", firstNum);
            document.getElementById("output").value = result;
            displayNum = "";
            console.log("displayNum: ", displayNum);
            operator = "+";
            decimalEnable();
        } else {
            firstNum = parseFloat(displayNum);
            displayNum = "";
            console.log("firstNum:", firstNum);
            operator = "+";
            decimalEnable();
        }
    });

    btnSubtract.addEventListener("click", () => {
        if (firstNum) {
            secondNum = parseFloat(displayNum);
            console.log("secondNum:", secondNum);
            result = operate(firstNum, operator, secondNum);
            console.log("result:", result);
            firstNum = result;
            console.log("firstNum now:", firstNum);
            document.getElementById("output").value = result;
            displayNum = "";
            console.log("displayNum: ", displayNum);
            operator = "-";
            decimalEnable();
        } else {
            firstNum = parseFloat(displayNum);
            displayNum = "";
            console.log("firstNum:", firstNum);
            operator = "-";
            decimalEnable();
        }
    });

    btnDivide.addEventListener("click", () => {
        if (firstNum) {
            secondNum = parseFloat(displayNum);
            console.log("secondNum:", secondNum);
            result = operate(firstNum, operator, secondNum);
            console.log("result:", result);
            firstNum = result;
            console.log("firstNum now:", firstNum);
            document.getElementById("output").value = result;
            displayNum = "";
            console.log("displayNum: ", displayNum);
            operator = "/";
            decimalEnable();
        } else {
            firstNum = parseFloat(displayNum);
            displayNum = "";
            console.log("firstNum:", firstNum);
            operator = "/";
            decimalEnable();
        }
    });

    btnMultiply.addEventListener("click", () => {
        if (firstNum) {
            secondNum = parseFloat(displayNum);
            console.log("secondNum:", secondNum);
            result = operate(firstNum, operator, secondNum);
            console.log("result:", result);
            firstNum = result;
            console.log("firstNum now:", firstNum);
            document.getElementById("output").value = result;
            displayNum = "";
            console.log("displayNum: ", displayNum);
            operator = "*";
            decimalEnable();
        } else {
            firstNum = parseFloat(displayNum);
            displayNum = "";
            console.log("firstNum:", firstNum);
            operator = "*";
            decimalEnable();
        }
    });

    btnEquals.addEventListener("click", () => {
        secondNum = parseFloat(displayNum);
        result = operate(firstNum, operator, secondNum);
        console.log("equals:", result);
        document.getElementById("output").value = result;
        decimalEnable();
    });


    btnClear.addEventListener("click", () => {
        firstNum = 0;
        secondNum = 0;
        displayNum = "";
        document.getElementById("output").value = displayNum;
        decimalEnable();
    });


    };

calculator();


