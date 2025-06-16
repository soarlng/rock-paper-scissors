let humanScore = 0;
let computerScore = 0;


function getHumanChoice(){
    let choice = prompt("Enter Rock, Paper, or Scissors");
    return choice;
}


function getComputerChoice(){
    let n = Math.floor(Math.random()*10);
    if(n<9){
        if(n>=0 && n<=2){
            console.log("Rock")
        }
        else if(n<=5){
            console.log("Paper")
        }
        else{
            console.log("Scissors")
        }
    }
    else{
        getComputerChoice()
    }
}
getComputerChoice();

function playRound(humanChoice, computerChoice){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

}