// //////undefined///////////
// when function return nothing 
function add(num1, num2) {
    console.log(num1 + num2)
}
const sum = add(10, 20)
console.log(sum)

// when a parameter has no value
function add1(num3, num4){
    console.log(num3 , num4)
}
let result = add1(10)
console.log(result)

// read an invalid object property
let premik = {name: 'Tanvin', id: 18}
console.log(premik.gf); 

// fixed as undefined
let fun = undefined;
console.log(fun)

// array 
let age = [10, 20, 30]
console.log(age[11])
// /////////////null////////////////
// to check value is 0 that means no value in variable