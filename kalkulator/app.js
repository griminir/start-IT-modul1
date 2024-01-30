//model
let buttonIndex = [
  '%',
  'CE',
  'C',
  '<-',
  '/',
  '7',
  '8',
  '9',
  '*',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];
let calculation = '';

//view
let app = document.querySelector('#app');
updateView();

function updateView() {
  app.innerHTML = /*html*/ `
    <div>${calculation || '0'}</div>
    <div class="buttonGrid">${createButtons()}</div>
  `;
}

function createButtons() {
  let buttons = '';
  for (let i = 0; i < buttonIndex.length; i++) {
    buttons += `<button onclick="number(${buttonIndex[i]})">${buttonIndex[i]}</button>`;
  }
  return buttons;
}

//controller
function number(number) {
  calculation += number;
  updateView();
}
