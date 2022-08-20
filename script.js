const items = [
    { name: "Rice", price: 5 },
    { name: "Book", price: 20 },
    { name: "Chicken", price: 10 },
    { name: "Monitor", price: 100},
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
    { name: 'Kyle', age: 26 },
    { name: 'John', age: 31 },
    { name: 'Sally', age: 42 },
    { name: 'Jill', age: 42 },
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

const btems = [
    { name: "brownies", price: 5 },
    { name: "cookies", price: 20 },
    { name: "bread", price: 10 },
    { name: "cake", price: 100},
]



