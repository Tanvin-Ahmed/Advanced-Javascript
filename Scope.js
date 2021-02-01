// let and const maintain global and block scope rules but var is different. Where you declare var it define as up of an function or code, though vale can't define;
// global scope
let global = 20;
function addNumber(num1, num2){
    // block scope
    const result = num1 + num2 + global;
    return result;
}
console.log(addNumber(10, 10))
console.log(global)
console.log(result)

