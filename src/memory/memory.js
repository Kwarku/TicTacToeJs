document.getElementById("homePageButton").addEventListener('click', () => {
    window.location.href = "../index.html"
})


const imageElements = Array.from(document.querySelectorAll("img"));
const resetButton = document.getElementById("resetButton")

let numberOfElement = 0
let moves = 0
let isPicked = false
let isClicked = false
let isWin = false

let firstSelectClass
let firstSelectId
let secondSelectClass
let secondSelectId

function generateGameBoard(){
    var imgRange = [
        "pic1","pic2","pic3","pic4","pic5","pic6",
        "pic1","pic2","pic3","pic4","pic5","pic6"
        ]
    
    let randomImgNumber

    imageElements.forEach(img => {
        randomImgNumber = Math.floor(Math.random()*imgRange.length)   
        img.className=imgRange[randomImgNumber]
        imgRange.splice(randomImgNumber,1)
    })
}
generateGameBoard()

imageElements.forEach(image => image.addEventListener('click', (event) => {

    if(isClicked){
        alert("zwolnij");

    }else if(isWin){

    }else if (!isPicked) {

        firstSelectId = event.currentTarget.id
        firstSelectClass = event.currentTarget.className

        document.getElementById(firstSelectId).src = "../../img/" + firstSelectClass + ".png"
        isPicked = true
    } else {
        if (firstSelectId === event.currentTarget.id) {
            console.log("błąd");
        } else {
            moves++
            secondSelectId = event.currentTarget.id
            secondSelectClass = event.currentTarget.className
            document.getElementById(secondSelectId).src = "../../img/" + secondSelectClass + ".png"

            if (firstSelectClass !== secondSelectClass) {
                isClicked = true
                setTimeout(() => {
                    checkResult()
                }, 600);
            }else {
                numberOfElement +=2
                firstSelectClass = undefined
                firstSelectId = undefined
                secondSelectClass = undefined
                secondSelectId = undefined
                isPicked = false
                if(numberOfElement === imageElements.length){
                    document.getElementById("score").innerHTML="Wygrana! Twoj wynik to: " + moves + "ruchow"
                    isWin=true
                    resetButton.style.visibility="visible"
                    resetButton.addEventListener("click", () => {
                        resetGame()
                        isWin=false
                    })
                }
            }

        }
    }

    console.log(moves);

}));

function checkResult() {
    // check
    if (secondSelectClass === firstSelectClass) {

        console.log("AAAA")
    } else {
        document.getElementById(firstSelectId).src = "../../img/block.png"
        document.getElementById(secondSelectId).src = "../../img/block.png"

    }

    console.log("reset");
    firstSelectClass = undefined
    firstSelectId = undefined
    secondSelectClass = undefined
    secondSelectId = undefined
    isPicked = false
    isClicked=false
}

 function resetGame(){
    imageElements.forEach(img => {
        img.src = "../../img/block.png"
    })
     firstSelectClass = undefined
     firstSelectId = undefined
     secondSelectClass = undefined
     secondSelectId = undefined
     isPicked = false
     isClicked=false
     moves = 0
     numberOfElement = 0;
     resetButton.style.visibility="hidden"
     document.getElementById("score").innerHTML=""

     generateGameBoard()
 }