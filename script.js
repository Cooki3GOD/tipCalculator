const billInput = document.querySelector("#recipt");
const tipbtns = document.querySelectorAll(".buttonContainer > div");
const ownTipBtn = document.querySelector("#own");
const numberOfPeopleInput = document.querySelector("#people")
const calcBtn = document.querySelector(".calc");
const resetBtn = document.querySelector(".reset");
const display = document.querySelectorAll(".rightCont h3")

function reset() { // Funnkcja resetujaca
    billInput.value = "0";
    for(let i = 0; i < tipbtns.length; i++) {
        tipbtns[i].classList.remove("active");
    }
    ownTipBtn.value = "";
    numberOfPeopleInput.value = "0";
    display[0].innerText = "0.00 zł"
    display[1].innerText = "0.00 zł"
}

tipbtns.forEach(function(btn) { // Funckja dodajaca klase active
    btn.addEventListener("click", (event) => {
        tipbtns.forEach((tipBtn) => {
            tipBtn.classList.remove("active");
            if(event.target.innerHTML === tipBtn.innerHTML) {
                tipBtn.classList.add("active");
                tipValue = parseFloat(tipBtn.innerHTML) / 100; // procent napiwku
                console.log(tipValue);
            }
            ownTipBtn.value = "";
        })
    })
})

function calc() {
    billValue = parseInt(billInput.value);
    numberOfPeople = parseInt(numberOfPeopleInput.value);
    if(numberOfPeople >= 1) {
        let tip = ((billValue * tipValue) /  numberOfPeople).toFixed(2);
        let value = (billValue * (tipValue + 1) / numberOfPeople).toFixed(2);
        display[0].innerText = tip + " zŁ";
        display[1].innerText = value + " zŁ";
    }
    else {
        alert("Liczba osob nie moze wynosic 0!");
    }
}


const customTIpValue  = ownTipBtn.addEventListener("focus", () => {
    tipbtns.forEach((tipBtn) => {
        tipBtn.classList.remove("active");
        if(tipBtn.classList[1] == "active") {
            ownTipBtn.classList[0].remove;
        }
        else if(tipBtn.classList[1] != "active"){
            ownTipBtn.classList.add("active");
            tipValue = parseFloat(ownTipBtn.value) / 100;
            console.log(tipValue);
        }
    })

})


calcBtn.addEventListener("click", calc)
resetBtn.addEventListener("click", reset);
