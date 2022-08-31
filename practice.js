function bouncer(arr) {
    let newArr = []
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
    if(arr[i]) {
        newArr.push(arr[i])
    }
}
return newArr
}

let output = bouncer(['a', 'b', null])
console.log(output)