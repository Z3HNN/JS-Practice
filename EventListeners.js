const greatgrandparent = document.querySelector(".grandparent")
const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".Adult")
const child = document.querySelector(".child")

grandparent.addEventListener("click", e => {
    console.log(e.target)
})

parent.addEventListener("click", e => {
    console.log("Adult 2")
})

child.addEventListener("click", e => {
    console.log("child 1")
})







