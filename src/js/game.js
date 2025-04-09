const popup = document.querySelector('#popup')

//enviros
const ice = document.querySelector('#ice')
const coral = document.querySelector('#coral')

// animals
const seal = document.querySelector('#seal')
const sealTT = document.querySelector('#sealTT')
seal.addEventListener("click", sealToolTip)

const seahorse = document.querySelector('#seahorse')
const seahorseTT = document.querySelector('#seahorseTT')
seahorse.addEventListener("click", seahorseToolTip)

const starfish = document.querySelector('#starfish')
const starTT = document.querySelector('#starTT')
starfish.addEventListener("click", starfishToolTip)

function sealToolTip() {
    popup.classList.replace("hide", "popup");
    sealTT.classList.replace("hide", "show");
    console.log(sealTT);
}

function starfishToolTip() {
    popup.classList.replace("hide", "popup");
    starTT.classList.replace("hide", "show");
    console.log(starTT);
}

function seahorseToolTip() {
    popup.classList.replace("hide", "popup");
    seahorseTT.classList.replace("hide", "show");
    console.log(seahorseTT);
}

// other windows
const help = document.querySelector('#helpButton')
const helpTT = document.querySelector('#helpTT')

console.log(helpTT)

help.addEventListener("click", helpWindow)

function helpWindow() {
    popup.classList.replace("hide", "popup");
    helpTT.classList.replace("hide", "show");
    console.log(help);
}

// close windows
const close = document.querySelector('#close')
close.addEventListener("click", closePopup)

// function to clean up closing windows
function hideWindow(element) {
    if (element.classList.contains("show")) {
        element.classList.replace("show", "hide");
        console.log(element);
    }
}

function closePopup() {
    popup.classList.replace("popup", "hide");
    hideWindow(sealTT);
    hideWindow(starTT);
    hideWindow(seahorseTT);
    hideWindow(helpTT);
}

// dragula
const drake = dragula([document.querySelector('#animals'), document.querySelector('#ice'), document.querySelector('#coral')]);
console.log(drake)

function onDrop(el, target, source, sibling) {
  console.log("The item is:", el);
  console.log("The target of this item is:", target);
  console.log("The source of this item is:", source);
  console.log("The sibling of this item is:", sibling);
}

drake.on("drop", onDrop);