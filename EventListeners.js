const greatgrandparent = document.querySelector(".greatgrandparent")
const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".Adult")
const child = document.querySelector(".child")

greatgrandparent.addEventListener("click", e => {
    console.log(e.target)
})

grandparent.addEventListener("click", e => {
    console.log(e.target)
})

parent.addEventListener("click", e => {
    console.log("Adult 2")
})

child.addEventListener("click", e => {
    console.log("child 1")
})







