let oldResult = 0;
let currentvalue = 0;
let finalResult = 0;

const enteredDatas = [];
const logEntries = [];


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

function getCurrentValue(){    
    oldResult = finalResult;
    currentvalue = parseInt(userInput.value);
    enteredDatas.push(currentvalue);
}

function calculateResult(opType, mathOp){

    getCurrentValue();

    if(!currentvalue){
        return;
    }

    if(opType === 'ADD'){
        finalResult += currentvalue;
    }else if(opType === 'SUBTRACT'){
        finalResult -= currentvalue;
    }else if(opType === 'MULTIPLY'){
        finalResult *= currentvalue;
    }else if(opType === 'DIVIDE'){
        finalResult /= currentvalue;
    }

    writeToLog(opType);
    printResult(mathOp);
}

function add(){    
    calculateResult('ADD', '+');    
}

function subtract(){
    calculateResult('SUBTRACT', '-');
}

function multiply(){
    calculateResult('MULTIPLY', '*');
}

function divide(){
    calculateResult('DIVIDE', '/');
}

function writeToLog(opIdentifier){
    const logEntry = {
        Operation: opIdentifier,
        prevResult: oldResult,
        enteredValue: currentvalue,
        result: finalResult
    };

    logEntries.push(logEntry);
}

function printResult(operator){
    let msg = `${oldResult}  ${operator}  ${currentvalue}`;  
    console.log(enteredDatas);
    console.log(logEntries);
    // console.log(logEntries[0].enteredValue);
    outputResult(finalResult, msg);
}