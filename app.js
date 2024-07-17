//declaring variables
let spans = document.querySelectorAll(".x");
let heading = document.querySelector("h1");
let turn = document.querySelector(".turn");
let divs = document.querySelectorAll(".box");
let current = "X";
let indicator = document.querySelector(".indicator");
let body = document.querySelector("body");
let changeturnaudio = new Audio("ting.mp3");
let gameoveraudio = new Audio("goodresult-82807.mp3");
let backgroundaudio = new Audio("music.mp3");
let wincheck = false;
let resetsound = new Audio("gameover.mp3");
for (span of spans) {
    span.innerText = "";
}

//--------------------------------------------------------------------------------------------------------------
// function for change of turn
const changeTurn = () => {
    if (current == "X") {
        return "O";
    }

    else if (current == "O") {
        return "X";
    }

}

//--------------------------------------------------------------------------------------------------------------
//adding eventlistener

for (div of divs) {
    div.addEventListener("click", function (event) {

        if (event.target.children[0].innerText == "" && (!wincheck)) {
            event.target.children[0].innerText = current;
            current = changeTurn();
            turn.innerText = current;
            checkwin();
            changeturnaudio.play();
        }
    })
}

//--------------------------------------------------------------------------------------------------------------
//reset function
const reset = () => {
    for (span of spans) {
        span.innerText = "";
    }
    wincheck = false;
    current = "X";
    turn.innerText = current;
}

// ------------------------------------------------------------------------------------------------------------
//functioning reset button

let resetbtn = document.querySelector(".reset");

resetbtn.addEventListener("click", ()=>{
reset();
resetsound.play();
});

//--------------------------------------------------------------------------------------------------------------
// winning function

let arrspan = Array.from(spans);
const win = (winner, idx1, idx2, idx3) => {

    let initialtext = heading.innerText;
    heading.innerText = `Player : ${winner} is the winner !!!!!`;

    divs[idx1].classList.add("win-bg");
    divs[idx2].classList.add("win-bg");
    divs[idx3].classList.add("win-bg");
    gameoveraudio.play();

    setTimeout(() => {

        reset();
        divs[idx1].classList.remove("win-bg");
        divs[idx2].classList.remove("win-bg");
        divs[idx3].classList.remove("win-bg");
        heading.innerText = initialtext;

    }, 2000);
}

//--------------------------------------------------------------------------------------------------------------
//check win function
const checkwin = () => {

    if ((arrspan[0].innerText == arrspan[1].innerText) && (arrspan[1].innerText == arrspan[2].innerText) && arrspan[0].innerText != "") {
        win(arrspan[0].innerText, 0, 1, 2);
        wincheck = true;
    }

    else if ((arrspan[3].innerText == arrspan[4].innerText) && (arrspan[4].innerText == arrspan[5].innerText) && arrspan[3].innerText != "") {
        win(arrspan[3].innerText, 3, 4, 5);
        wincheck = true;
    }

    else if ((arrspan[6].innerText == arrspan[7].innerText) && (arrspan[7].innerText == arrspan[8].innerText) && arrspan[6].innerText != "") {
        win(arrspan[6].innerText, 6, 7, 8);
        wincheck = true;
    }

    else if ((arrspan[0].innerText == arrspan[3].innerText) && (arrspan[3].innerText == arrspan[6].innerText) && arrspan[0].innerText != "") {
        win(arrspan[3].innerText, 0, 3, 6);
        wincheck = true;
    }

    else if ((arrspan[1].innerText == arrspan[4].innerText) && (arrspan[4].innerText == arrspan[7].innerText) && arrspan[1].innerText != "") {
        win(arrspan[1].innerText, 1, 4, 7);
        wincheck = true;
    }

    else if ((arrspan[2].innerText == arrspan[5].innerText) && (arrspan[5].innerText == arrspan[8].innerText) && arrspan[2].innerText != "") {
        win(arrspan[2].innerText, 2, 5, 8);
        wincheck = true;
    }

    else if ((arrspan[0].innerText == arrspan[4].innerText) && (arrspan[4].innerText == arrspan[8].innerText) && arrspan[0].innerText != "") {
        win(arrspan[0].innerText, 0, 4, 8);
        wincheck = true;
    }

    else if ((arrspan[2].innerText == arrspan[4].innerText) && (arrspan[4].innerText == arrspan[6].innerText) && arrspan[2].innerText != "") {
        win(arrspan[2].innerText, 2, 4, 6);
        wincheck = true;
    }
}

//-----------------------------------------------------------------------------------------------------------
// drawn function

const draw = () => {

}