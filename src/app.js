const computerChoiceField = document.getElementById('computer-choice')
const playerChoiceField = document.getElementById('player-choice')
const resultField = document.getElementById('result')

// tu jeszcze mozna dać document.getElementsByClassName('nazwa-klasy-buttonow')
const possibleChoices = Array.from(document.querySelectorAll('button'))

let userChoice
let computerChoice
let randomNumber
let result
let prevChoice = possibleChoices[0]
let isWin


let wins=0
let loses=0
let draws=0
let games=0
let a
let winnerId = "YOU"

const paper = 'paper'
const rock = 'rock'
const scrissors = 'scissors'
const win = 'You win!'
const lose = 'You lose!'
const draw = "It's a draw!"



possibleChoices.forEach(pickedButton => pickedButton.addEventListener('click', (event) => {
    showPLayers()
    clearPrevChoice()
    handleUserChoice(event)
    generateComputerChoice()
    let gameState = checkResult()    
    showWiner(gameState)
    setClickedButtonStyle(pickedButton)
    printResults()
}))

function showPLayers(){
    Array.from(document.getElementsByClassName("result-image-hidden")).forEach(image => {
        image.className="result-image"
    } )
}

function clearPrevChoice(){
    prevChoice.className = "button"
    let elementById = document.getElementById(String(winnerId));
    elementById.style.border ="none";
}

function handleUserChoice(e){
    userChoice = e.currentTarget.id
    let filename = "../img/" + e.currentTarget.id + ".png"
    document.getElementById("YOU").src=(filename);
}

function generateComputerChoice(){
    randomNumber = Math.floor(Math.random() * possibleChoices.length)
    computerChoice = possibleChoices[randomNumber].id
    let filename = "../img/" + possibleChoices[randomNumber].id + ".png"
    document.getElementById("ABC").src=(filename);

}

function checkResult(){
    games++

    if(computerChoice === userChoice){
        resultField.innerHTML = draw
        draws++
        return 2
    }
    else if(computerChoice === rock && userChoice === paper){
        isWin=true 
    }
    if(computerChoice === rock && userChoice === scrissors){
        isWin=false
    }
    if(computerChoice === paper && userChoice === scrissors){
        isWin=true
    }
    if(computerChoice === paper && userChoice === rock){
        isWin=false
    }
    if(computerChoice === scrissors && userChoice === rock){
        isWin=true
    }
    if(computerChoice === scrissors && userChoice === paper){
        isWin=false
    }

    wins = isWin ? wins+1 : wins
    loses = isWin ? loses : loses+1

    result = isWin ? win : lose

    resultField.innerHTML = result

    return isWin ? 0 :1
}
function showWiner(gameState){
    // 0 - player win
    // 1 - computer win
    // 2 - draw
    if (gameState !== 2) {
        winnerId = gameState === 0 ? "YOU" : "ABC"
        let elementById = document.getElementById(winnerId);
        elementById.style.border ="solid";
        elementById.style.borderColor ="blue";
    }
}

function setClickedButtonStyle(button){
    button.className = "picked-button"
    prevChoice = button

}

function printResults(){
    document.getElementById('player-wins').innerHTML = wins
    document.getElementById('computer-wins').innerHTML = loses
    document.getElementById('draws').innerHTML = draws
    document.getElementById('total').innerHTML = games
}


