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

function add(){    
    getCurrentValue();
    finalResult += currentvalue;
    writeToLog("ADD");
    printResult('+');
}

function subtract(){
    getCurrentValue();
    finalResult -= currentvalue;
    writeToLog("SUBTRACT");
    printResult('-');
}

function multiply(){
    getCurrentValue();
    finalResult *= currentvalue;
    writeToLog("MULTIPLY");
    printResult('*');
}

function divide(){
    getCurrentValue();
    finalResult /= currentvalue;
    writeToLog("DIVIDE");
    printResult('/');
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