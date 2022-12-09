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
    // first, second, third row
    if (boxes[0].textContent !== "" && boxes[0].textContent === boxes[1].textContent && boxes[1].textContent === boxes[2].textContent) {
        nextturnheading.textContent = `${boxes[0].textContent} WON !`
    } else if (boxes[3].textContent !== "" && boxes[3].textContent === boxes[4].textContent && boxes[4].textContent === boxes[5].textContent) {
        nextturnheading.textContent = `${boxes[3].textContent} WON !`
    } else if (boxes[6].textContent !== "" && boxes[6].textContent === boxes[7].textContent && boxes[7].textContent === boxes[8].textContent) {
        nextturnheading.textContent = `${boxes[6].textContent} WON !`
    }
    // first, second, third column
    else if (boxes[0].textContent !== "" && boxes[0].textContent === boxes[3].textContent && boxes[3].textContent === boxes[6].textContent) {
        nextturnheading.textContent = `${boxes[0].textContent} WON !`
    }
    else if (boxes[1].textContent !== "" && boxes[1].textContent === boxes[4].textContent && boxes[4].textContent === boxes[7].textContent) {
        nextturnheading.textContent = `${boxes[1].textContent} WON !`
    }
    else if (boxes[2].textContent !== "" && boxes[2].textContent === boxes[5].textContent && boxes[5].textContent === boxes[8].textContent) {
        nextturnheading.textContent = `${boxes[2].textContent} WON !`
    }
    // diaginol 1 and 2
    else if (boxes[0].textContent !== "" && boxes[0].textContent === boxes[4].textContent && boxes[4].textContent === boxes[8].textContent) {
        nextturnheading.textContent = `${boxes[0].textContent} WON !`
    }
    else if (boxes[2].textContent !== "" && boxes[2].textContent === boxes[4].textContent && boxes[4].textContent === boxes[6].textContent) {
        nextturnheading.textContent = `${boxes[2].textContent} WON !`
    }

}