
function playRound(humanChoice, computerChoice){
    let humanScore = 0;
    let computerScore = 0;

        // function playRound(humanChoice, computerChoice){
        if(humanChoice===computerChoice){
            const p = document.createElement('p')
            p.textContent = "Tie!";
            resultsDiv.appendChild(p);
        }

        else if (humanChoice==="rock"){

            if (computerChoice==="paper") {
                computerScore+=1;
                const p = document.createElement('p')
                p.textContent = "Round lost. Paper beats rock!";
                resultsDiv.appendChild(p);
            }
            else {
                humanScore+=1;
                const p = document.createElement('p');
                p.textContent = "Round won. Rock beats scissors!";
                resultsDiv.appendChild(p);
            }
        }

        else if(humanChoice==="paper"){

            if (computerChoice==="scissors"){ 
                computerScore+=1;
                const p = document.createElement('p');
                p.textContent = "Round lost. Scissors beat paper!";
                resultsDiv.appendChild(p);
            }
            else {
                humanScore+=1;
                const p = document.createElement('p');
                p.textContent = "Round won. Paper beats rock!";
                resultsDiv.appendChild(p);
            }
        }

        else{

            if (computerChoice==="rock") {
                computerScore+=1;
                const p = document.createElement('p');
                p.textContent = "Round lost. Rock beats scissors!";
                resultsDiv.appendChild(p);
            }
            else {
                humanScore+=1;
                const p = document.createElement('p');
                p.textContent = "Round won. Scissors beats paper!";
                resultsDiv.appendChild(p);
            }
        }
    }
//}

function getComputerChoice(){
    const selectionArray = ["rock", "paper", "scissors"];
    const randomNum = selectionArray[Math.floor(Math.random()*selectionArray.length)];
    return randomNum;

}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultsDiv = document.querySelector('.results');

rockButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = "rock";
    playRound(humanChoice, computerChoice);
    }
);
paperButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = "paper";
    playRound(humanChoice, computerChoice);
})
scissorsButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = "scissors";
    playRound(humanChoice, computerChoice);
})


// function getHumanChoice(){
//     let humanSelection = prompt("Enter Rock, Paper, or Scissors!: ").toLowerCase();
//     return humanSelection;
// }
