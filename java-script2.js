

const resultsDiv = document.querySelector('.results-div');
resultsDiv.id = 'resultsDiv';
document.body.appendChild(resultsDiv);

const rockbtn = document.getElementById('rockbtn');
rockbtn.addEventListener('click', () => playRound('rock'));
const paperbtn = document.getElementById('paperbtn');
paperbtn.addEventListener('click', () => playRound('paper'));
const scissorsbtn = document.getElementById('scissorsbtn');
scissorsbtn.addEventListener('click', () => playRound('scissors'));

function getComputerChoice(){
  let computerChoice = '';
  let randomNumber = Math.random();
  if(randomNumber<=0.33) computerChoice = "rock";
  else if (randomNumber<=0.66) computerChoice =  "paper";
  else computerChoice =  "scissors";
  return computerChoice;
}

let humanScore=0;
let computerScore=0;
let gameOver = false;

function playRound(humanChoice){
    if (gameOver) return;
    const computerChoice = getComputerChoice();
    
    if(humanChoice===computerChoice) {
      const p = document.createElement('p');
      p.textContent = "Tie!"
      resultsDiv.appendChild(p);
    }

    else if (humanChoice==='rock'){

      if (computerChoice==='paper') {
        computerScore+=1;
        const p = document.createElement('p');
        p.textContent = "You lose! Paper beats rock."
        resultsDiv.appendChild(p);
      }
      else {
        humanScore+=1;
        const p = document.createElement('p');
        p.textContent = "You win! Rock beats scissors."
        resultsDiv.appendChild(p);
      }
    }

    else if (humanChoice==='paper'){

      if (computerChoice==='rock') {
        humanScore+=1;
        const p = document.createElement('p');
        p.textContent = "You win! Paper beats rock."
        resultsDiv.appendChild(p);
        
      }
      else {
        computerScore+=1;
        const p = document.createElement('p');
        p.textContent = "You lose! Scissors beat paper."
        resultsDiv.appendChild(p);
      } 
    }

    else if (humanChoice==='scissors'){

      if (computerChoice==='rock') {
        computerScore+=1;
        const p = document.createElement('p');
        p.textContent = "You lose! Rock beats scissors."
        resultsDiv.appendChild(p);
      }
      else {
        humanScore+=1;
        const p = document.createElement('p');
        p.textContent = "You win! Scissors beat paper."
        resultsDiv.appendChild(p);
      }
    }
    checkScore();
  }
function checkScore(){
  if(humanScore === 5 || computerScore === 5){
    const p = document.createElement('p');
    if(humanScore>=computerScore) p.textContent = `You win! Score: You - ${humanScore}; Computer - ${computerScore}`;
    else p.textContent = `You lose! Score: You - ${humanScore}; Computer - ${computerScore}`;
    resultsDiv.appendChild(p);
    gameOver = true;
    humanScore = 0;
    computerScore = 0;
  }
}