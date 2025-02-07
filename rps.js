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
    console.log(`com selection ${comSelection}`)
}

function getHumanChoice(humanSelection){
   let choicePrompt = prompt("Rock, paper, scissors, choose!")
    if(choicePrompt.toLowerCase() === "rock"){
        humanSelection = "rock";
    }
    else if(choicePrompt.toLowerCase() === "paper"){
        humanSelection = "paper";
    }
    else if(choicePrompt.toLowerCase() === "scissors"){
        humanSelection = "scissors"; 
    }
    console.log(`your selection is ${humanSelection}`)   
}
    