const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// to find element, index and full array
const arr2 = arr1.map(element => element * element)
console.log(arr1)
console.log(arr2)
// filter find value with condition
const arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1]
const filter = arr3.filter(value => value > 4)
console.log(arr3)
console.log(filter)
// find
const find = arr3.find(element => element > 6)
console.log(find)
// findIndex
const findindex = arr3.findIndex(element => element > 6)
console.log(findindex)