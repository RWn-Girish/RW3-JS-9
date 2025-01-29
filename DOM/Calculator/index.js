const display = document.getElementById("display");
const buttons = document.querySelectorAll('button');

let currentNumber = ""
let prevNumber = ""
let operator = null;

function updateDisplay(){
    display.value = currentNumber || prevNumber
}

function appendData(num){
    currentNumber += num;
    updateDisplay();
}

function selectOpertor(ope){
    if(currentNumber == "")
        return;
    prevNumber = currentNumber
    operator = ope;
    currentNumber = ""
}

function calculate() {
    if(currentNumber == "" || prevNumber == "")
        return;

    let prev = parseFloat(prevNumber);
    let curr = parseFloat(currentNumber);
    let result;

    switch (operator) {
        case "+":
                result = prev + curr;
            break;
        case "-":
                result = prev - curr;
            break;
        case "*":
                result = prev * curr;
            break;
        case "/":
                result = prev / curr;
            break;
    
        default:
            break;
    }

    currentNumber = result.toString();
    prevNumber = ""
    operator = null;
    updateDisplay()
}


function clearFun() {
   currentNumber = ""
    prevNumber = ""
    operator = null;
    updateDisplay();
}



buttons.forEach((button)=> {
    button.addEventListener('click', ()=> {
        let value = button.textContent;

        if(!isNaN(value) || value == "."){
            appendData(value);
        }else if(value === "="){
            calculate();
        }else if(value === "C"){
            clearFun();
        }else{
            selectOpertor(value);
        }
    })
})