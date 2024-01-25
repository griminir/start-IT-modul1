//model
let html = /*html*/ `<div class="outerBall">
<div class="innerBall">
  <div class="number" onclick="fortune()">8</div>
</div>
</div>
<div id="statement" class="words">what will be your fortune?</div>`;
let lastNumber = '';
const wordsOfWisdom = [
  'Good Luck',
  'Bad luck',
  'The universe does not know',
  'Try going outside today',
  'It does not want to tell you',
];
const error = '404 could not find spirutal guide reload page and try again';

//view
updateView();

function updateView() {
  document.querySelector('#mainDiv').innerHTML = html;
}

//controller
function fortune() {
  let number = Math.floor(Math.random() * 5);
  console.log(number);
  console.log(lastNumber);
  if (number === 0 && number !== lastNumber) {
    document.querySelector('#statement').innerHTML = wordsOfWisdom[0];
    lastNumber = number;
  } else if (number === 1 && number !== lastNumber) {
    document.querySelector('#statement').innerHTML = wordsOfWisdom[1];
    lastNumber = number;
  } else if (number === 2 && number !== lastNumber) {
    document.querySelector('#statement').innerHTML = wordsOfWisdom[2];
    lastNumber = number;
  } else if (number === 3 && number !== lastNumber) {
    document.querySelector('#statement').innerHTML = wordsOfWisdom[3];
    lastNumber = number;
  } else if (number === 4 && number !== lastNumber) {
    document.querySelector('#statement').innerHTML = wordsOfWisdom[4];
    lastNumber = number;
  } else if (number === lastNumber) {
    document.querySelector('#mainDiv').innerHTML = error;
  }
}
