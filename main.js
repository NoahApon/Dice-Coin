// COIN FLIP SIMULATOR

//HTML Variables
let outputEl = document.getElementById("output-coins");
let outputDice = document.getElementById("output-dice");
let outputDiceTwo = document.getElementById("output-dice-two");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
let diceFaceOne = document.getElementById("diceFaceOne");
let diceFaceTwo = document.getElementById("diceFaceTwo");
let diceFaceThree = document.getElementById("diceFaceThree");
let diceFaceFour = document.getElementById("diceFaceFour");
let diceFaceFive = document.getElementById("diceFaceFive");
let diceFaceSix = document.getElementById("diceFaceSix");
let totalRoll = document.getElementById("total-roll");

//count variables
let numHeads = 0;
let numTails = 0;
let rollOne = 0;
let rollTwo = 0;
let rollThree = 0;
let rollFour = 0;
let rollFive = 0;
let rollSix = 0;

//button event listener
document.getElementById("btn-coin").addEventListener('click', btnClickedCoin);
document.getElementById("btn-dice").addEventListener('click', btnClickedDice);

function btnClickedCoin() {
    let randNumCoin = Math.random();
    console.log(randNumCoin);

    if (randNumCoin < 0.5) {
        outputEl.innerHTML = "<img src='img/heads.png' />";
        numHeads++;
        headsEl.innerHTML = numHeads;
    } else {
        outputEl.innerHTML = "<img src='img/tails.png' />";
        numTails++;
        tailsEl.innerHTML = numTails;
    }
}

function btnClickedDice() {
    let randNumDice = Math.floor(Math.random() * 6 + 1);
    let randNumDiceTwo = Math.floor(Math.random() * 6 + 1);
    console.log(randNumDice);
    console.log(randNumDiceTwo);

    if (randNumDice == 6) {
        outputDice.innerHTML = "<img src='img/6.png' />";
        rollSix++;
        diceFaceSix.innerHTML = rollSix;
    } else if (randNumDice == 5) {
        outputDice.innerHTML = "<img src='img/5.png' />";
        rollFive++;
        diceFaceFive.innerHTML = rollFive;
    } else if (randNumDice == 4) {
        outputDice.innerHTML = "<img src='img/4.png' />";
        rollFour++;
        diceFaceFour.innerHTML = rollFour;
    } else if (randNumDice == 3) {
        outputDice.innerHTML = "<img src='img/3.png' />";
        rollThree++;
        diceFaceThree.innerHTML = rollThree;
    } else if (randNumDice == 2) {
        outputDice.innerHTML = "<img src='img/2.png' />";
        rollTwo++;
        diceFaceTwo.innerHTML = rollTwo;
    } else if (randNumDice == 1) {
        outputDice.innerHTML = "<img src='img/1.png' />";
        rollOne++;
        diceFaceOne.innerHTML = rollOne;
    }

    if (randNumDiceTwo == 6) {
        outputDiceTwo.innerHTML = "<img src='img/6.png' />";
        rollSix++;
        diceFaceSix.innerHTML = rollSix;
    } else if (randNumDiceTwo == 5) {
        outputDiceTwo.innerHTML = "<img src='img/5.png' />";
        rollFive++;
        diceFaceFive.innerHTML = rollFive;
    } else if (randNumDiceTwo == 4) {
        outputDiceTwo.innerHTML = "<img src='img/4.png' />";
        rollFour++;
        diceFaceFour.innerHTML = rollFour;
    } else if (randNumDiceTwo == 3) {
        outputDiceTwo.innerHTML = "<img src='img/3.png' />";
        rollThree++;
        diceFaceThree.innerHTML = rollThree;
    } else if (randNumDiceTwo == 2) {
        outputDiceTwo.innerHTML = "<img src='img/2.png' />";
        rollTwo++;
        diceFaceTwo.innerHTML = rollTwo;
    } else if (randNumDiceTwo == 1) {
        outputDiceTwo.innerHTML = "<img src='img/1.png' />";
        rollOne++;
        diceFaceOne.innerHTML = rollOne;
    } 

    totalRollValue = randNumDice + randNumDiceTwo;

    totalRoll.innerHTML = totalRollValue;
}
