let diceNum = document.querySelector(".player1CircleScore");
const player1Roll = document.querySelector(".player1Roll");
var randNum = 0;

let diceNum2 = document.querySelector(".player2CircleScore");
const player2Roll = document.querySelector(".player2Roll");
var randNum2 = 0;

// rolling the dice player1
player1Roll.addEventListener("click", () => {

        randNum += Math.floor(Math.random() * 6) +1;
        diceNum.textContent = randNum;
        
        if(randNum >= "21"){
            alert("Player ONE you have lost");
        }
})

// rolling the dice player2
player2Roll.addEventListener("click", () => {

    randNum2 += Math.floor(Math.random() * 6) +1;
    diceNum2.textContent = randNum2;
    
    if(randNum2 >= "21"){
        alert("Player TWO you have lost");
    }
})

//sorting the hold button
const player1Next = document.querySelector(".player1Nextplayer");
const player2Next = document.querySelector(".player2Nextplayer");

//player 1 hold button to make roll invis
player1Next.addEventListener("click", () => {
    player1Roll.classList.add("invisible");
})

//player 2 hold button makes invis and check winner based on score
player2Next.addEventListener("click", () => {
    player2Roll.classList.add("invisible");
    if (randNum == randNum2) {
        alert("ITS A DRAW");
    }
    else if (randNum > randNum2) {
        alert("PLAYER ONE HAS WON");
    }
    else if (randNum < randNum2) {
        alert("PLAYER TWO HAS WON");
    }
})

//sorting reset button
const player1Reset = document.querySelector(".player1Reset");

player1Reset.addEventListener("click", () => {
    diceNum.textContent = "0";
})
