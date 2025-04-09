// Default: Show page 1, hide Page 2 & 3
const instr1 = document.querySelector('.instr1')

const instr2 = document.querySelector('.instr2');
instr2.classList.toggle("hide")

const instr3 = document.querySelector('.instr3');
instr3.classList.toggle("hide")

// Toggler from Page 1 to Page 2
const instrButton1 = document.querySelector('#button1');
instrButton1.addEventListener("click", instrToggle1)

function instrToggle1() {
    instr1.classList.replace("instr1", "hide");
    instr2.classList.replace("hide", "instr2");
}

// Toggler from Page 2 to Page 3
const instrButton2 = document.querySelector('#button2');
instrButton2.addEventListener("click", instrToggle2)

function instrToggle2() {
    instr2.classList.replace("instr2", "hide");
    instr3.classList.replace("hide", "instr3");
}