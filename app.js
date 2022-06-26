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

const paper = 'paper'
const rock = 'rock'
const scrissors = 'scissors'
const win = 'You win!'
const lose = 'You lose!'
const draw = "It's a draw!"

possibleChoices.forEach(abcd => abcd.addEventListener('click', (e) => {
    //usunięcie poprzedniego koloru
   clearPrevChoice()


    // pokazanie wyboru usera
    userChoice = e.currentTarget.id
    // playerChoiceField.innerHTML = userChoice

    // wylosowanie wyboru komputera
    generateComputerChoice()

    // sprawdzenie rezultatu
    checkResult()

    // ustwienie koloru na wybranym buttonie
    setClickedButtonStyle(abcd)

    printResults()
}))

function clearPrevChoice(){
    prevChoice.className = "button"
}

function generateComputerChoice(){
    randomNumber = Math.floor(Math.random() * possibleChoices.length)
    computerChoice = possibleChoices[randomNumber].id
    computerChoiceField.innerHTML = computerChoice
}

function checkResult(){
    games++

    if(computerChoice === userChoice){
        resultField.innerHTML = draw
        draws++
        console.log('wins:',wins," loses:",loses," games:",games," draws:",draws);
        return
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

    console.log('wins:',wins," loses:",loses," games:",games," draws:",draws);
    return result
}

function setClickedButtonStyle(button){
    button.className = "picked-button"
    prevChoice = button

}

function printResults(){
    // nowe opcje. 

    // drukowanie wyników
    // wyliczanie procentowego wygrywania
    // stylizacja całej gry 
    // skórki jasna / ciemna 

}


