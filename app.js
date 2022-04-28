let firstOperand = '';
let operator = '';
let secondOperand = '';
let result = '';
let isOperatorChosen = false;

let previousNum = document.getElementById('output');
let currentNum = document.getElementById('input');
let addBtn = document.querySelector('.plus');
let subtractBtn = document.querySelector('.minus');
let multiplyBtn = document.querySelector('.multiply');
let divideBtn = document.querySelector('.divide');
let clearBtn = document.getElementById('clear');
let btn1 = document.getElementById('one');
let btn2 = document.getElementById('two');
let btn3 = document.getElementById('three');
let btn4 = document.getElementById('four');
let btn5 = document.getElementById('five');
let btn6 = document.getElementById('six');
let btn7 = document.getElementById('seven');
let btn8 = document.getElementById('eight');
let btn9 = document.getElementById('nine');
let btn0 = document.getElementById('zero');
let dotBtn = document.querySelector('.decimal');
let equalsBtn = document.querySelector('.equals');

function operatorChosen(operatorPressed) {
    if(firstOperand != '') {
        if(secondOperand == '') {
            switch(operatorPressed) {
                case '+':
                    operator = '+';
                    break;
                case '-':
                    operator = '-';
                    break;
                case '*':
                    operator = '*';
                    break;
                case '/':
                    operator = '/';
                    break;
            }
            isOperatorChosen = true;
        } else if(secondOperand != '') {
            switch(operatorPressed) {
                case '+':
                    operator = '+';
                    break;
                case '-':
                    operator = '-';
                    break;
                case '*':
                    operator = '*';
                    break;
                case '/':
                    operator = '/';
                    break;
            }
            firstOperand = result;
            secondOperand = '';
            result = 0;
        }
    }
};

function operate() {
    if (operator === '+') {
        let firstOpFloat = parseFloat(firstOperand);
        let secondOpFloat = parseFloat(secondOperand);
        result = firstOpFloat + secondOpFloat;
        previousNum.textContent = result;
        return result;
    } else if (operator === '-') {
        let firstOpFloat = parseFloat(firstOperand);
        let secondOpFloat = parseFloat(secondOperand);
        result = firstOpFloat - secondOpFloat;
        previousNum.textContent = result;
        return result;
    } else if (operator === '*') {
        let firstOpFloat = parseFloat(firstOperand);
        let secondOpFloat = parseFloat(secondOperand);
        result = firstOpFloat * secondOpFloat;
        previousNum.textContent = result;
        return result;
    } else if (operator === '/') {
        let firstOpFloat = parseFloat(firstOperand);
        let secondOpFloat = parseFloat(secondOperand);
        result = firstOpFloat / secondOpFloat;
        previousNum.textContent = result;
        return result;
    }
};

function prevent2OperatorsDisplay() {
    let curNumHTML = currentNum.innerHTML;
    let splitCurNum = curNumHTML.split('');
    if (!splitCurNum.includes('+')) {
        if (!splitCurNum.includes('-')) {
            if (!splitCurNum.includes('*')) {
                if (!splitCurNum.includes('/')) {
                    currentNum.textContent += operator;
                }
            }
        } 
    }
};

function enableBtns() {
    addBtn.disabled = false;
    subtractBtn.disabled = false;
    multiplyBtn.disabled = false;
    divideBtn.disabled = false;
};

function disableBtns() {
    addBtn.disabled = true;
    subtractBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
};

addBtn.addEventListener('click', () => {
    operatorChosen('+');
    prevent2OperatorsDisplay();
    disableBtns();
});

subtractBtn.addEventListener('click', () => {
    operatorChosen('-');
    prevent2OperatorsDisplay();
    disableBtns();
});

multiplyBtn.addEventListener('click', () => {
    operatorChosen('*');
    prevent2OperatorsDisplay();
    disableBtns();
});

divideBtn.addEventListener('click', () => {
    operatorChosen('/');
    prevent2OperatorsDisplay();
    disableBtns();
});

function inputNum(numb) {
    if(isOperatorChosen == false && firstOperand.length <= 5) {
        firstOperand += `${numb}`;
        currentNum.textContent += `${numb}`;
    } else if(isOperatorChosen == true && secondOperand.length <= 5) {
        secondOperand += `${numb}`;
        currentNum.textContent += `${numb}`;
    }
};

btn1.addEventListener('click', () => inputNum(1));
btn2.addEventListener('click', () => inputNum(2));
btn3.addEventListener('click', () => inputNum(3));
btn4.addEventListener('click', () => inputNum(4));
btn5.addEventListener('click', () => inputNum(5));
btn6.addEventListener('click', () => inputNum(6));
btn7.addEventListener('click', () => inputNum(7));
btn8.addEventListener('click', () => inputNum(8));
btn9.addEventListener('click', () => inputNum(9));
btn0.addEventListener('click', () => inputNum(0));

dotBtn.addEventListener('click', () => {
    if(isOperatorChosen == false && firstOperand.length <= 5) {
        let firstOperandArr = firstOperand.split('');
        if (!firstOperandArr.includes('.')) {
            firstOperand += '.';
            currentNum.textContent += '.';
        }
    } else if(isOperatorChosen == true && secondOperand.length <= 5) {
        let secondOperandArr = secondOperand.split('');
        if (!secondOperandArr.includes('.')) {
            secondOperand += '.';
            currentNum.textContent += '.';
        }
    }
});

equalsBtn.addEventListener('click', () => {
    operate();
    enableBtns();
    currentNum.textContent = result;
});

clearBtn.addEventListener('click', () => {
    enableBtns();
    firstOperand = '';
    operator = '';
    secondOperand = '';
    result = '';
    isOperatorChosen = false;
    currentNum.textContent = '';
    previousNum.textContent = '';
});