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
        }
        if(secondOperand != '') {
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
    }

    if (operator === '-') {
        let firstOpFloat = parseFloat(firstOperand);
        let secondOpFloat = parseFloat(secondOperand);
        result = firstOpFloat - secondOpFloat;
        previousNum.textContent = result;
        return result;
    }

    if (operator === '*') {
        let firstOpFloat = parseFloat(firstOperand);
        let secondOpFloat = parseFloat(secondOperand);
        result = firstOpFloat * secondOpFloat;
        previousNum.textContent = result;
        return result;
    }

    if (operator === '/') {
        let firstOpFloat = parseFloat(firstOperand);
        let secondOpFloat = parseFloat(secondOperand);
        result = firstOpFloat / secondOpFloat;
        previousNum.textContent = result;
        return result;
    }
};


addBtn.addEventListener('click', () => {
    operatorChosen('+');
    currentNum.textContent += operator;
});

subtractBtn.addEventListener('click', () => {
    operatorChosen('-');
    currentNum.textContent += operator;
});

multiplyBtn.addEventListener('click', () => {
    operatorChosen('*');
    currentNum.textContent += operator;
});

divideBtn.addEventListener('click', () => {
    operatorChosen('/');
    currentNum.textContent += operator;
});


btn1.addEventListener('click', () => {
    if(isOperatorChosen == false) {
        firstOperand += '1';
        currentNum.textContent += '1';
    }
    if(isOperatorChosen == true) {
        secondOperand += '1';
        currentNum.textContent += '1';
        operate();
    }
});

btn2.addEventListener('click', () => {
    if(isOperatorChosen == false) {
        firstOperand += '2';
        currentNum.textContent += '2';
    }
    if(isOperatorChosen == true) {
        secondOperand += '2';
        currentNum.textContent += '2';
        operate();
    }
});

btn3.addEventListener('click', () => {
    if(isOperatorChosen == false) {
        firstOperand += '3';
        currentNum.textContent += '3';
    }
    if(isOperatorChosen == true) {
        secondOperand += '3';
        currentNum.textContent += '3';
        operate();
    }
});

btn4.addEventListener('click', () => {
    if(isOperatorChosen == false) {
        firstOperand += '4';
        currentNum.textContent += '4';
    }
    if(isOperatorChosen == true) {
        secondOperand += '4';
        currentNum.textContent += '4';
        operate();
    }
});

btn5.addEventListener('click', () => {
    if(isOperatorChosen == false) {
        firstOperand += '5';
        currentNum.textContent += '5';
    }
    if(isOperatorChosen == true) {
        secondOperand += '5';
        currentNum.textContent += '5';
        operate();
    }
});

btn6.addEventListener('click', () => {
    if(isOperatorChosen == false) {
        firstOperand += '6';
        currentNum.textContent += '6';
    }
    if(isOperatorChosen == true) {
        secondOperand += '6';
        currentNum.textContent += '6';
        operate();
    }
});

btn7.addEventListener('click', () => {
    if(isOperatorChosen == false) {
        firstOperand += '7';
        currentNum.textContent += '7';
    }
    if(isOperatorChosen == true) {
        secondOperand += '7';
        currentNum.textContent += '7';
        operate();
    }
});

btn8.addEventListener('click', () => {
    if(isOperatorChosen == false) {
        firstOperand += '8';
        currentNum.textContent += '8';
    }
    if(isOperatorChosen == true) {
        secondOperand += '8';
        currentNum.textContent += '8';
        operate();
    }
});

btn9.addEventListener('click', () => {
    if(isOperatorChosen == false) {
        firstOperand += '9';
        currentNum.textContent += '9';
    }
    if(isOperatorChosen == true) {
        secondOperand += '9';
        currentNum.textContent += '9';
        operate();
    }
});

btn0.addEventListener('click', () => {
    if(isOperatorChosen == false) {
        firstOperand += '0';
        currentNum.textContent += '0';
    }
    if(isOperatorChosen == true) {
        secondOperand += '0';
        currentNum.textContent += '0';
        operate();
    }
});

dotBtn.addEventListener('click', () => {
    if(isOperatorChosen == false) {
        firstOperand += '.';
        currentNum.textContent += '.';
    }
    if(isOperatorChosen == true) {
        secondOperand += '.';
        currentNum.textContent += '.';
    }
})

equalsBtn.addEventListener('click', () => {
    operate();
    currentNum.style.opacity = '50%';
    previousNum.style.opacity = '100%';
    currentNum.textContent = result;
});

clearBtn.addEventListener('click', () => {
    firstOperand = '';
    operator = '';
    secondOperand = '';
    result = '';
    isOperatorChosen = false;
    currentNum.textContent = '';
    previousNum.textContent = '';
    previousNum.style.opacity = '50%';
    currentNum.style.opacity = '100%';
});