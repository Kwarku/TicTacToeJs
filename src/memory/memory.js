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

function log() {
    console.log("1-claas:", firstSelectClass, "1-id:", firstSelectId, "| 2-class:", secondSelectClass, "2-id: ", secondSelectId, "numer of pic:", numerOfPictureSelected)
}

imageElements.forEach(image => image.addEventListener('click', (event) => {

    if(isClicked){
        alert("zwolnij");

    }else if(isWin){

    }else if (!isPicked) {
        console.log("pierwsze użycie");

        firstSelectId = event.currentTarget.id
        firstSelectClass = event.currentTarget.className

        document.getElementById(firstSelectId).src = "../../img/" + firstSelectClass + ".png"
        isPicked = true
    } else {
        if (firstSelectId === event.currentTarget.id) {
            console.log("błąd");
        } else {
            moves++
            console.log("drugie użycie");
            secondSelectId = event.currentTarget.id
            secondSelectClass = event.currentTarget.className
            document.getElementById(secondSelectId).src = "../../img/" + secondSelectClass + ".png"

            if (firstSelectClass !== secondSelectClass) {
                isClicked = true
                setTimeout(() => {
                    checkResult()
                }, 1500);
            }else {
                numberOfElement +=2
                console.log("reset");
                firstSelectClass = undefined
                firstSelectId = undefined
                secondSelectClass = undefined
                secondSelectId = undefined
                isPicked = false
                if(numberOfElement === imageElements.length){
                    document.getElementById("score").innerHTML="wygrana"
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

        console.log("sukces")
    } else {
        console.log("nie ma suckesu")
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

    // losujemy ich pozycje

 }