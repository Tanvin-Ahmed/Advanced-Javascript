function closure(){
    let count = 0;
    return function(){
        count++;
        return count
    }
}
const result1 = closure();
console.log(result1())
console.log(result1())
console.log(result1())
console.log(result1())

const result2 = closure()
console.log(result2())
console.log(result2())
console.log(result2())
console.log(result2())