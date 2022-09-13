const items = [
    { name: "Noodles", price: 5.89 },
    { name: "Book", price: 20.66 },
    { name: "Chicken", price: 16.89 },
    { name: "Monitor", price: 99.89},
]

//let totalPrice = 0
//items.forEach(item => {
//    totalPrice += item.price
//})

const totalPrice = items.reduce((total, item) => {
return total + item.price
},0)

console.log(totalPrice)


const people = [
    { name: 'Kyle', age: 66 },
    { name: 'John', age: 33 },
    { name: 'Sally', age: 21 },
    { name: 'Zeb', age: 42 },
]

const result = people.reduce((groupedPeople, person) => {
const age = person.age
if (groupedPeople[age] === null) groupedPeople[age] = []
groupedPeople[age].push(person)
return groupedPeople
}, {})

const numbers = [89, 43, 22]

const sum = numbers.reduce((total, number, index, array) => {
    console.log(array)
    console.log(`Number: ${Number}`)
    return total + number
}, 0)

console.log(sum)

const bakeryItems = [
    { product: "brownies", price: 7 },
    { product: "cookies", price: 6 },
    { product: "bread", price: 3 },
    { product: "cake", price: 8},
]



