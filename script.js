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
    { name: 'John', age: 48 },
    { name: 'Sally', age: 20 },
    { name: 'Jill', age: 60 },
]

const result = people.reduce((groupedPeople, person) => {
const age = person.age
if (groupedPeople[age] === null) groupedPeople[age] = []
groupedPeople[age].push(person)
return groupedPeople
}, {})

const numbers = [13, 2, 5]

const sum = numbers.reduce((total, number, index, array) => {
    console.log(array)
    console.log(`Number: ${Number}`)
    return total + number
}, 0)

console.log(sum)

const bakeryItems = [
    { product: "brownies", price: 5 },
    { product: "cookies", price: 20 },
    { product: "bread", price: 10 },
    { product: "cake", price: 100},
]



