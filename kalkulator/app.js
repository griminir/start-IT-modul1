//model
let regularButtonIndex = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
let operatorButtonIndex = [];
let calculation = '';

//view
let app = document.querySelector('#app');
updateView();

function updateView() {
  app.innerHTML = /*html*/ `
    <div>${calculation || '0'}</div>
    <div class="buttonGrid">${createNumberButtons()} </div>
  `;
}

function createNumberButtons() {
  let numberButtons = '';
  for (i = 0; i < regularButtonIndex.length; i++) {
    NumberButtons += `<button onclick="numberButton(${regularButtonIndex[i]})">${regularButtonIndex[i]}</button>`;
  }
  return buttons;
}

function createOperatorButtons() {
  let operatorButtons = '';
  for (i = 0; i < regularButtonIndex.length; i++) {
    operatorButtons += `<button onclick="numberButton(${operatorButtonIndex[i]})">${operatorButtonIndex[i]}</button>`;
  }
  return operatorButtons;
}

//controller
function numberButton(value) {
  calculation += value;
  updateView();
}

function operatorsButton(params) {}
