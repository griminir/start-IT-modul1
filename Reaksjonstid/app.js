//Model
const div = document.querySelector('#mainDiv');
let selectedLampIndex = '';
let startTime = '';
let finishTime = '';
let spentMilliseconds = '';
let spentSeconds = '';

//View
updateView();

function updateView() {
  bryter();
  div.innerHTML = '';
  for (let i = 1; i <= 25; i++) {
    if (i === selectedLampIndex) {
      div.innerHTML += `<div id="${i}" class="lamp lightOn" onclick ="lightOff()"></div>`;
    } else {
      div.innerHTML += `<div id="${i}" class="lamp" ></div>`;
    }
  }
  start();
}

//Controller
function bryter() {
  selectedLampIndex = Math.floor(Math.random() * 25);
}

function lightOff() {
  calculateTime();
  finsh();
  updateView();
}

function start() {
  startTime = new Date().getTime();
}

function calculateTime() {
  finishTime = new Date().getTime();
  spentMilliseconds = finishTime - startTime;
  spentSeconds = spentMilliseconds / 1000;
}

function finsh() {
  console.log(spentSeconds);
}
