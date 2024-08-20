
const choices = ["rock","paper","scissors"]

function game(){
playRound();
playRound();
playRound();
playRound();
playRound();

}





function playRound(){
const plyerSelection = plyerChoice();
const computerSelection = computerChoice();
console.log(computerSelection);
const winner = takeone(plyerSelection,computerSelection)
console.log(winner);


}





function plyerChoice(){
    let input = prompt('Type Rock, Paper , or Scissors')
    while(input == null){
        input = prompt('Type Rock, Paper , or Scissors')
    }

    input = input.toLocaleLowerCase();
    let check = validinput(input);
    if(check == true){
        console.log(input);
    }

    check = validinput(input)

    return input;
   // console.log(input)
} 






function computerChoice(){

    return choices[Math.floor(Math.random() * choices.length)]
}





function validinput(choice) {
    if(choices.includes(choice)){
        return true;
    } else {
        return false;
    }

}


function takeone(choiceA , choiceB){
    if(choiceA === choiceB){
        return "tie";

    } else if( 
     (choiceA === 'rock') && choiceB == 'scissors'||
     (choiceA === 'paper') && choiceB == 'rock' ||
     (choiceA === 'scissors') && choiceB == 'paper')
     {
        return "player";
    } else {
        return "computer";
    }
}

    

game();
