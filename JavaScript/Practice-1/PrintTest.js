
let body = document.querySelector("body");

let isBlue = false;

// setInterval(function(){
//     if(isBlue){
//         body.style.background = 'white';
//     }else{
//         body.style.background = 'blue';
//     }

//     isBlue = !isBlue;
// }, 1000);

setInterval(() => {
    if(isBlue){
        body.style.background = 'white';
    }else{
        body.style.background = 'blue';
    }
        
    isBlue = !isBlue;
}, 1000);

const num1 = 1;
const num2 = 2;
const num3= num1 + num2;
console.log('Sum is : ' + num3);
// console.log(employee.name);
console.log('Hi, Hello World');
