let humanScore = 0;
let computerScore = 0;

function playGame(roundNumber){
    
    for(let i=0; i<=5; i++){
        playRound();
    }
    if (humanScore>computerScore){
        console.log("You Win!");  
    }
    else{
        console.log("You Lose!")
    }
}

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();

    if(humanChoice===computerChoice){
        console.log("Tie!");
    }
    else if(humanChoice==="rock"){
        if(computerChoice==="paper"){
            console.log("You lose! Paper covers rock!");
            computerScore+=1;
        }
        else{
            console.log("You Win! Rock crushes scissors!");
            humanScore+=1;
        }
    }
    else if(humanChoice==="paper"){
        if(computerChoice==="rock"){
            console.log("You win! Paper covers rock!");
            humanScore+=1;
        }
        else{
            console.log("You lose! Scissors cut paper!");
            computerScore+=1;
        }
    }
    else{
        if(computerChoice==="rock"){
            console.log("You lose! Rock crushes scissors!");
            computerScore+=1;
        }
        else{
            console.log("You win! Scissors cut paper!");
            humanScore+=1;
        }
    }
}

function getHumanChoice(){
    let choice = prompt("Enter Rock, Paper, or Scissors");
    return choice;
}


function getComputerChoice(){
    let n = Math.floor(Math.random()*10);
    let a = "0";
    if(n<9){
        if(n>=0 && n<=2){
            a = "rock";
        }
        else if(n<=5){
            a = "paper"
        }
        else{
            a = "scissors"
        }
    }
    else{
        getComputerChoice()
    }
    return a;
}
playGame();