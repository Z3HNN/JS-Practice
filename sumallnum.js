function sumAll(arr) {
 let minArr = Math.min(arr[0], arr[1])
 let maxArr = Math.max(arr[0], arr[1])
 let total = 0
 for (let i = minArr; i <= maxArr; i++) {
    total += i
 }
 return total
}

let output = sumAll([1, 6])
console.log(output)