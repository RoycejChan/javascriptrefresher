
let playerScore = 0;
let computerScore = 0;
let rounds_left = 5;
let playerChoice = "";
let computerChoice = "";

function playRound(playerChoice,computerChoice) {
    
    for (let i=1;i <= rounds_left;rounds_left--) {

            if (playerChoice == computerChoice) {
                console.log("Its a tie!")
                rounds_left--;
            } else if (playerChoice == "rock") {
                if (computerChoice == "paper") {
                    console.log("You lose")
                    computerScore++;
                } else {
                    console.log("You win")
                    playerScore++;
                } 
            } else if (playerChoice == "paper") {
                if (computerChoice =="scissors") {
                    console.log("you lose")
                    computerScore++;
                } else {
                    console.log("You win.")
                    playerScore++;
                }
            } else if (playerChoice == "scissors") {
                if (computerChoice =="rock") {
                    console.log("you lose")
                    computerScore++;
                } else {
                    console.log("You win.")
                    playerScore++;
                }
            } 
            
            console.log(playerChoice)
            console.log(computerChoice)
            console.log(rounds_left)

        }
}



function getPlayerChoice() {
    let PlayerChoice = prompt("Rock,Paper, or Scissors?");
    
    return PlayerChoice.toLowerCase()

}

function getComputerChoice() {

    const computerChoices = ["rock","paper","scissors"];

    const computerChoice = computerChoices[Math.floor(Math.random() * 3)]

    return computerChoice.toLowerCase()

    }
playerChoice = getPlayerChoice();
computerChoice = getComputerChoice();
playRound(playerChoice,computerChoice);




///console.log(getPlayerChoice())
///console.log(getComputerChoice()