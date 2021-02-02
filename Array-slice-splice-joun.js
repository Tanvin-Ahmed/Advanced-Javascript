let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const slice = num.slice(1, 5)
console.log('slice :', slice)
console.log('Array after slice :', num)
// splice
const splice = num.splice(5, 8, 77)
console.log('splice :', splice)
console.log('Array after Splice :', num)
// join
const join = num.join(' ')
console.log('join :', join)