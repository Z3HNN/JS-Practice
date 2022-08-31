function bouncer(arr) {
    return arr.filter(function(item){
        return item
    })
}

let myArr = [1, 2, 4, 1]
let myOutput = myArr.filter(function(item){
    return item < 2
})

let output = bouncer(['c', 35, null, 1])
console.log(output)