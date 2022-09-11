const screen = document.getElementById("screen");
let oldValue = "";
function displayNumber(x) {
    let result = oldValue + x;
    screen.textContent = result;
    oldValue = result;
}
const numbers = document.getElementById('numbers');
let number = "";
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
for (let i = 0; i < numberArray.length; i++) {
    number += `<div class="col-4"><button onclick="displayNumber(${numberArray[i]})" class="btn btn-primary rounded-4 w-100 mt-2"> ${numberArray[i]}</button></div>`

}
numbers.innerHTML = number;

let aPart, bPart, operationType;
function operation(operationA) {
    if (operationA == 'sum') {
        screen.textContent = "";
        aPart = oldValue;
        oldValue = "";
        operationType = 'sum';
    } else if (operationA == 'minus') {
        screen.textContent = "";
        aPart = oldValue;
        oldValue = "";
        operationType = 'minus';
    } else if (operationA == 'zarb') {
        screen.textContent = "";
        aPart = oldValue;
        oldValue = "";
        operationType = 'zarb';
    }
    else if (operationA == 'division') {
        screen.textContent = "";
        aPart = oldValue;
        oldValue = "";
        operationType = 'division';
    }
    else if (operationA == 'dot') {
        screen.textContent = oldValue + '.';
        aPart = oldValue;
        oldValue = aPart + '.';
        
        operationType = 'dot'
    }
    else {
        screen.textContent = "";
        aPart = oldValue;
        oldValue = "";
        operationType = 'clear';
    }
}
function calculate() {
    bPart = oldValue;
    if (operationType == 'sum') {
        screen.textContent = +aPart + +bPart;
    } else if (operationType == 'minus') {
        screen.textContent = +aPart - +bPart;
    } else if (operationType == 'zarb') {
        screen.textContent = +aPart * +bPart;
    }
    else if (operationType == 'division') {
        screen.textContent = +aPart / +bPart;
    
    }
     else {
        screen.textContent = "";
    } 
}