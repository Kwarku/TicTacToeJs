document.getElementById("homePageButton").addEventListener('click', () => {
    window.location.href = "../index.html"
})


const imageElements = Array.from(document.querySelectorAll("img"));
let numberOfElement = 0
let isPicked = false

let firstSelectClass
let firstSelectId
let secondSelectClass
let secondSelectId

function log() {
    console.log("1-claas:", firstSelectClass, "1-id:", firstSelectId, "| 2-class:", secondSelectClass, "2-id: ", secondSelectId, "numer of pic:", numerOfPictureSelected)
}

imageElements.forEach(image => image.addEventListener('click', (event) => {

    if (!isPicked) {
        console.log("pierwsze użycie");

        firstSelectId = event.currentTarget.id
        firstSelectClass = event.currentTarget.className

        document.getElementById(firstSelectId).src = "../../img/" + firstSelectClass + ".png"
        isPicked = true
    } else {
        if (firstSelectId === event.currentTarget.id) {
            console.log("błąd");
        } else {
            console.log("drugie użycie");
            secondSelectId = event.currentTarget.id
            secondSelectClass = event.currentTarget.className
            document.getElementById(secondSelectId).src = "../../img/" + secondSelectClass + ".png"

            if (firstSelectClass !== secondSelectClass) {
                setTimeout(() => {
                    checkResult()
                }, 3000);
            }else {
                numberOfElement +=2
                console.log("reset");
                firstSelectClass = undefined
                firstSelectId = undefined
                secondSelectClass = undefined
                secondSelectId = undefined
                isPicked = false
            }

        }
    }


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
}


// na cyzm polega ta gra.
// mamy sobie X obrazków zakrytych
// klikamy jeden obrazek, odkrywa się
// klikamy drugi drugi odkrywa się
// jeżeli są takie same, zostają odkryte / znikają
// jezeli są inne, zakrywają się oba
