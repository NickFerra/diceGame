let diceNum = document.querySelector(".player1CircleScore");
const player1Roll = document.querySelector(".player1Roll");


// rolling the dice player1
player1Roll.addEventListener("click", () => {

        let randNum = Math.floor(Math.random() * 6) +1;
        diceNum.textContent = randNum;
})
