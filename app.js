let number = document.getElementById("number-el");

// let savedNumbers = []

function reset() {
    number.textContent = 0
};
function decrease() {
    if (number.textContent > 0) {
        number.textContent--
    }
};

function increase() {
    number.textContent++
};

function save() {
    if (number.textContent > 0) {
        // let newNumber = number.textContent
        // savedNumbers.push(newNumber)
        // for (let i = 0; i < savedNumbers.length; i++) {
        //     document.getElementById("saved-span").textContent += savedNumbers[i] + ", "
        // }
        // number.textContent = 0
        // savedNumbers.shift()
        let newNumber = number.textContent;
        document.getElementById("saved-span").textContent += newNumber + ", ";
        number.textContent = 0;
    }
};