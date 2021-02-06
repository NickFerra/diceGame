let diceNum = document.querySelector(".player1CircleScore");
const player1Roll = document.querySelector(".player1Roll");
var randNum = 0;

// rolling the dice player1
player1Roll.addEventListener("click", () => {

        randNum += Math.floor(Math.random() * 6) +1;
        diceNum.textContent = randNum;
        
})
