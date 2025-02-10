function getComputerChoice(comSelection){
    let randNum =  Math.floor(Math.random() * 3) + 1;
    if(randNum === 1){
        comSelection = "rock";
    }
    else if(randNum === 2){
        comSelection = "paper";
    }
    else{
        comSelection = "scissors";        
    }
    console.log(`the com selection is ${comSelection}`)
    return comSelection;
}

function getHumanChoice(humSelection){
let choicePrompt = prompt("Rock, paper, scissors, choose!")
    if(choicePrompt.toLowerCase() === "rock"){
        humSelection = "rock";
    }
    else if(choicePrompt.toLowerCase() === "paper"){
        humSelection = "paper";
    }
    else if(choicePrompt.toLowerCase() === "scissors"){
        humSelection = "scissors"; 
    }
    console.log(`your selection is ${humSelection}`)
    return humSelection;  
}

function playRound(humanChoice, computerChoice) {
    if(computerChoice === "scissors" && humanChoice === "rock"){
        humanScore++;;
    }
    else if(computerChoice === "rock" && humanChoice === "paper"){
        humanScore++;
    }
    else if(computerChoice === "paper" && humanChoice === "scissors"){
        humanScore++;
    } 
    else if(humanChoice === computerChoice){
     humanScore + 0;
     computerScore + 0;   
    }
    else{
        computerScore++;
    }
}
