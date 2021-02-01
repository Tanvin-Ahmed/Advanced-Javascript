// Falsy value 
// 0, "", '', null, undefined, false, NaN
// without those all is truthy value
let name = "Tanvin"
if (name.length > 0) {
    console.log('The condition is true')
} else {
    console.log('The condition is false')
}