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

