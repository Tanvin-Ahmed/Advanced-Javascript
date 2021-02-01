const student = [
    {Name: 'Tanvin', ID: 62},
    {Name: 'Rahim', ID: 56},
    {Name: 'Ahmed', ID: 57}
]
// map array of object
const name = student.map(element => element.Name)
const id = student.map(element => element.ID)
console.log(name)
console.log(id)
// filter
const idFilter = student.filter(element => element.ID > 56)
console.log(idFilter)
// find
const idOne = student.find(element => element.ID > 56)
console.log(idOne)