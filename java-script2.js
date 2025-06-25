
function getComputerChoice(){
    const n = Math.floor(Math.random()*10);
    let computerChoice = "0";
    if(n<9){
        if(n>=0 && n<=2) computerChoice = "rock";
        else if (n<=5) computerChoice = "paper";
        else computerChoice = "scissors";
        return computerChoice;
    }
    else return getComputerChoice();
}
function getHumanChoice(){
    let humanChoice = prompt("Enter Rock, Paper, or Scissors!: ").toLowerCase();
    return humanChoice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

        function playRound(humanChoice, computerChoice){
        if(humanChoice===computerChoice) console.log("Tie!");

        else if (humanChoice==="rock"){

            if (computerChoice==="paper") {
                computerScore+=1;
                console.log("Round lost. Paper beats rock!");
            }
            else {
                humanScore+=1;
                console.log("Round won. Rock beats scissors!") ;
            }
        }

        else if(humanChoice==="paper"){

            if (computerChoice==="scissors"){ 
                computerScore+=1;
                console.log("Round lost. Scissors beat paper!");
            }
            else {
                humanScore+=1;
                console.log("Round won. Paper beats rock!") ;
            }
        }

        else{

            if (computerChoice==="rock") {
                computerScore+=1;
                console.log("Round lost. Rock beats scissors!");
            }
            else {
                humanScore+=1;
                console.log("Round won. Scissors beats paper!") ;
            }
        }
    }
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

}
playGame();