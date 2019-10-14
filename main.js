const bar = document.getElementById("barbarian");
const kng = document.getElementById("knight");
const gnt = document.getElementById("giant");
const arrowLeft = document.querySelector(".fa-chevron-circle-left");
const arrowRight = document.querySelector(".fa-chevron-circle-right");
let card = 1;

arrowLeft.addEventListener("click", function () {
    //  kng.style.display = "inline";
    if (card === 1) {
        gnt.style.display = "inline";
        bar.style.display = "none";
        card = 3;
    } else {
        if (card === 2) {
            bar.style.display = "inline";
            kng.style.display = "none";
            card = 1;
        } else {
            if (card === 3) {
                kng.style.display = "inline";
                gnt.style.display = "none";
                card = 2;
            }
        }
    }


});

arrowRight.addEventListener("click", function () {

    if (card === 1) {
        kng.style.display = "inline";
        bar.style.display = "none";
        card = 2;
    } else {
        if (card === 2) {
            gnt.style.display = "inline";
            kng.style.display = "none";
            card = 3;
        } else {
            if (card === 3) {
                bar.style.display = "inline";
                gnt.style.display = "none";
                card = 1;
            }
        }
    }


})