"use strict"

let next = "X"
let nextturnheading = document.querySelector("h1")

let boxes = document.querySelectorAll("main>div")

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", action)

}


function action(event) {
    if (event.target.textContent === "") {
        event.target.textContent = next;

        if (next === "X") {
            next = "O"
        } else {
            next = "X"
        }
    }
    nextturnheading.textContent = `Next turn: ${next}`
    checkifsomeonewon()
}

function checkifsomeonewon() {
    if (boxes[0].textContent === boxes[1].textContent && boxes[0].textContent === boxes[2].textContent) {
        nextturnheading.textContent = `${boxes[0].textContent} WON !`
    }
}