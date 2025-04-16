// audio
const audio = document.querySelector('audio')
const audioBtn = document.querySelector('#audioBtn')

audioBtn.addEventListener("click", mute);

function mute() {
    audio.muted = !audio.muted;
}

// game win condition bools
let error = false; // will trigger graphics change when a wrong answer is submitted

const animalWin = {
  'seal': false,
  'seahorse': false,
  'starfish': false,
}

const popup = document.querySelector('#popup')

//enviros
const ice = document.querySelector('#ice')
const coral = document.querySelector('#coral')

// animals
// i used copilot to help me clean this up since it was getting messy
// originally i just had a ton of const variables and event listeners

const animals = [
    {
        id: 'seal',
        TTid: 'sealTT'
    },
    {
        id: 'seahorse',
        TTid: 'seahorseTT'
    },
    {
        id: 'starfish',
        TTid: 'starTT' },
];

animals.forEach(animal => {
    const element = document.querySelector(`#${animal.id}`);
    const tooltip = document.querySelector(`#${animal.TTid}`);
    const overlay = document.querySelector('#overlay');

    element.addEventListener("click", () => {
        popup.classList.replace("hide", "popup");
        tooltip.classList.replace("hide", "show");
        overlay.classList.replace("hide", "overlay");
    });
});

// other windows
const help = document.querySelector('#helpButton')
const helpTT = document.querySelector('#helpTT')
// put creds here

help.addEventListener("click", helpWindow)

function helpWindow() {
    popup.classList.replace("hide", "popup");
    helpTT.classList.replace("hide", "show");
    overlay.classList.replace("hide", "overlay");
}


// close windows
const close = document.querySelector('#close')
close.addEventListener("click", closePopup)

function hideWindow(element) {
    if (element.classList.contains("show")) {
        element.classList.replace("show", "hide");
    }
}

function closePopup() {
    popup.classList.replace("popup", "hide");
    overlay.classList.replace("overlay", "hide");
    hideWindow(sealTT);
    hideWindow(starTT);
    hideWindow(seahorseTT);
    hideWindow(helpTT);
    hideWindow(errorTT);
}

// shrink animal when dropped into an exhibit
function shrinkAnimal() {
    //i'm empty rn...;
}

// dragula
const drake = dragula([document.querySelector('#animals'), document.querySelector('#ice'), document.querySelector('#coral')]);
console.log(drake)

function onDrop(el, target, source, sibling) {
  //console.log("The item is:", el);
  let animalID = el.attributes.id.nodeValue; // otherwise it just grabs the full HTML element!
  console.log("The animal ID is:", animalID);
  //console.log("The target of this item is:", target);
  let targetID = target.attributes.id.nodeValue;
  console.log("The target ID is:", targetID);
  console.log("The source of this item is:", source);
  //console.log("The sibling of this item is:", sibling);

  // win conditions - is there a way to call this as another function so it doesn't look so messy?

  const animalToTarget = {
    'seal': 'ice',
    'seahorse': 'coral',
    'starfish': 'coral'
  }
  animalWin[animalID] = animalToTarget[animalID] == targetID

  // What this essentially does:
  /*if (animalToTarget[animalID] == targetID) {
    animalWin[animalID] = true
  } else {
    animalWin[animalID] = false
  }*/

  console.log('the dropped animal is', animalWin[animalID]);
  shrinkAnimal(animalID);
}

drake.on("drop", onDrop);

// check for win

const checkWinButton = document.querySelector('#doneButton');
checkWinButton.addEventListener("click", checkWin)


// REPLACE WITH A DIFFERENT DIV AND DIFFERENT LINK

const winScreen = document.querySelector('#winPopup')
const winTT = document.querySelector('#winTT')
const errorTT = document.querySelector('#errorTT')

function winWindow() {
    winScreen.classList.replace("hide", "popup");
    winTT.classList.replace("hide", "show");
    overlay.classList.replace("hide", "overlay");
}

function errorWindow() {
    popup.classList.replace("hide", "popup")
    errorTT.classList.replace("hide", "show");
    overlay.classList.replace("hide", "overlay");
}

function checkWin() {
    if (Object.values(animalWin).every(x => x)) { // for every single animal win value, check that it's true
        console.log('the player has won :)');
        let error = false;
        winWindow();

    } else {
        console.log('the game is yet to be won...');
        let error = true;
        errorWindow();
    }
    //console.log(error)
}