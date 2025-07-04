let userScore = 0;
let compScore = 0;
let arr = ["rock", "paper", "scissors"];

let compChoice = document.getElementById("comp-choices");
let userChoice = document.getElementById("user-choices");
const resultDisplay = document.getElementById("result");
const choices = document.querySelectorAll(".choice");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function winCondition() {
  if (userChoice === "rock" && arr[compChoice] === "paper") {
    console.log("win comp");
  } else if (userChoice === "paper" && arr[compChoice] === "rock") {
    console.log("win user");
  } else if (userChoice === "scissors" && arr[compChoice] === "paper") {
    console.log("win user");
  } else if (userChoice === "paper" && arr[compChoice] === "scissors") {
    console.log("win comp");
  } else if (userChoice === "rock" && arr[compChoice] === "scissors") {
    console.log("win user");
  } else if (userChoice === "scissors" && arr[compChoice] === "rock") {
    console.log("win comp");
  } else {
    console.log("its a draw");
    return true;
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    userChoice = choice.getAttribute("id");
    console.log("user choice =", userChoice);
    compChoice = getRandomInt(0, 2);
    console.log("comp choice =", arr[compChoice]); // Will output 0,1,2
    winCondition();
  });
});
