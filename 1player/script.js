let diceNum = document.querySelector(".player1CircleScore");
const player1Roll = document.querySelector(".player1Roll");
var randNum = 0;

let diceNum2 = document.querySelector(".player2CircleScore");
const player2Roll = document.querySelector(".player2Roll");
var randNum2 = 0;

// rolling the dice player1
player1Roll.addEventListener("click", () => {
var diceRollNow = Math.floor(Math.random() * 6) +1;
        randNum += diceRollNow;
        diceNum.textContent = randNum;
        
        if(randNum >= "21"){
            alert("Player ONE you have lost");
        }

        document.querySelector("#diceImage").src = "img/dice" + diceRollNow + ".png";

})

// rolling the dice player2
player2Roll.addEventListener("click", () => {

var diceRollNow2 =  Math.floor(Math.random() * 6) +1;
    randNum2 += diceRollNow2;
    diceNum2.textContent = randNum2;
    
    if(randNum2 >= "21"){
        alert("Player TWO you have lost");
    }

    document.querySelector("#diceImage").src = "img/dice" + diceRollNow2 + ".png";
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


//main page buttons
//selecting one player
const select1 = document.querySelector(".select1Player");
const player1Box = document.querySelector(".player1Box", ".invisible");
const bigBox = document.querySelector(".bigBox", ".invisible");
const playerSelector = document.querySelector(".playerSelector");
const playerResetButtonShow = document.querySelector(".playerReset1", ".invisible")

select1.addEventListener("click", () => {
    player1Box.classList.remove("invisible");
    bigBox.classList.remove("invisible");
    playerResetButtonShow.classList.remove("invisible");
    playerSelector.classList.add("invisible");
})

//selecting two players
const select2 = document.querySelector(".select2Player");
const player2Box = document.querySelector(".player2Box", ".invisible");

select2.addEventListener("click", () => {
    player1Box.classList.remove("invisible");
    bigBox.classList.remove("invisible");
    playerResetButtonShow.classList.remove("invisible");
    playerSelector.classList.add("invisible");
    player2Box.classList.remove("invisible");
})

//sorting reset button
const player1Reset = document.querySelector(".player1Reset");

player1Reset.addEventListener("click", () => {
    bigBox.classList.add("invisible");
    playerSelector.classList.remove("invisible");
    player2Box.classList.add("invisible");
    playerResetButtonShow.classList.add("invisible");
    player1Box.classList.add("invisible");

    //showing the roll buttons again
    player1Roll.classList.remove("invisible");
    player2Roll.classList.remove("invisible");

    randNum = 0;
    randNum2 = 0;
    diceNum.textContent = randNum;
    diceNum2.textContent = randNum2;
});