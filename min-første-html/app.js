function blankAll() {
  document.querySelector('#cardTools').innerHTML = '';
  document.querySelector('#cardHtml').innerHTML = '';
  document.querySelector('#cardCss').innerHTML = '';
  document.querySelector('#cardJs').innerHTML = '';
  document.querySelector('#cardGame').innerHTML = '';
}

function showTools() {
  blankAll();
  document.querySelector('#cardTools').innerHTML = `
  <div class="innerCard">
  De to viktiste verktøyen vi bruker er disse:
  <ul>
    <li>
      Koderedigeringprogrammet
      <a href="https://code.visualstudio.com/">Visual Stuido Code</a>
      <ul>
        <li>JavaScript booster</li>
        <li>es6-string-html</li>
        <li>live server</li>
        <li>live share</li>
      </ul>
    </li>
    <li>
      Nettleser
      <a href="https://www.google.com/intl/no/chrome/"
        >Google Chrome</a
      >
    </li>
  </ul>
</div>
  `;
}

function showHtml() {
  blankAll();
  document.querySelector('#cardHtml').innerHTML = `
  <div class="innerCard">
            Vi bruker HTML til å definere et dokument.
            <ul>
              <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
              <li>Tagger for grunnleggende formatering av tekst</li>
              <li>&lt;div&gt;</li>
              <li>&lt;input type="text"&gt;</li>
              <li>&lt;button&gt;</li>
              <li>
                <a href="https://www.w3schools.com/html/default.asp"
                  >W3Schools HTML Tutorial</a
                >
              </li>
              <li>
                <a href="https://www.w3schools.com/tags/default.asp"
                  >W3Schools HTML Reference</a
                >
              </li>
            </ul>
          </div>
`;
}

function showCss() {
  blankAll();
  document.querySelector('#cardCss').innerHTML = `
  <div class="innerCard">
            Vi bruker CSS til å style et dokument, altså farger, fonter,
            utseende og lignende.
            <ul>
              <li>background-color</li>
              <li>color</li>
              <li>padding</li>
              <li>margin</li>
              <li>border</li>
              <li>text-align</li>
              <li>font-size</li>
              <li>
                <a
                  href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                  >Flexbox</a
                >
              </li>
              <li>
                <a
                  href="https://css-tricks.com/snippets/css/complete-guide-grid/"
                  >Grid</a
                >
              </li>
              <li>
                <a href="https://www.w3schools.com/css/default.asp"
                  >W3Schools CSS Tutorial</a
                >
              </li>
              <li>
                <a href="https://www.w3schools.com/cssref/default.asp"
                  >W3Schools CSS Reference</a
                >
              </li>
            </ul>
          </div>
`;
}

function showJs() {
  blankAll();
  document.querySelector('#cardJs').innerHTML = `
  <div class="innerCard">
            Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi
            skal lære grunnleggende programmering ved å manipulere HTML- og
            CSS-kode på en nettside ved hjelp av JavaScript.
            <ul>
              <li>
                Det finnes en W3Schools JavaScript Tutorial, men her anbefaler
                vi heller å følge kurset vårt på Moodle.
              </li>
              <li>
                <a href="https://www.w3schools.com/jsref/default.asp"
                  >W3Schools JavaScript Reference</a
                >
              </li>
            </ul>
          </div>
  `;
}

function showGame() {
  blankAll();
  document.querySelector('#cardGame').innerHTML = `
            <div id="head" class="bodyPart">
              <button onclick="swapHeadB()">&#129092;</button>
              <img id="headContainer" src="img/head1.png" alt="hode1" />
              <button onclick="swapHeadF()">&#129094;</button>
            </div>
            <div id="body" class="bodyPart">
              <button onclick="swapBodyB()">&#129092;</button>
              <img id="bodyContainer" src="img/body1.png" alt="kropp1" />
              <button onclick="swapBodyF()">&#129094;</button>
            </div>
            <div id="legs" class="bodyPart">
              <button onclick="swapLegsB()">&#129092;</button>
              <img id="legsContainer" src="img/legs1.png" alt="ben1" />
              <button onclick="swapLegsF()">&#129094;</button>
            </div>
          </div>
`;
}

let index = 0;

const head = [
  'img/head1.png',
  'img/head2.png',
  'img/head3.png',
  'img/head4.png',
];

function swapHeadF() {
  let headContainer = document.getElementById('headContainer');

  index = (index + 1) % head.length;

  headContainer.src = head[index];
}

function swapHeadB() {
  let headContainer = document.getElementById('headContainer');

  index = (index - 1 + head.length) % head.length;

  headContainer.src = head[index];
}

const body = [
  'img/body1.png',
  'img/body2.png',
  'img/body3.png',
  'img/body4.png',
];

function swapBodyF() {
  let bodyContainer = document.getElementById('bodyContainer');

  index = (index + 1) % body.length;

  bodyContainer.src = body[index];
}

function swapBodyB() {
  let bodyContainer = document.getElementById('bodyContainer');

  index = (index - 1 + body.length) % body.length;

  bodyContainer.src = body[index];
}

const legs = [
  'img/legs1.png',
  'img/legs2.png',
  'img/legs3.png',
  'img/legs4.png',
];

function swapLegsF() {
  let legsContainer = document.getElementById('legsContainer');

  index = (index + 1) % legs.length;

  legsContainer.src = legs[index];
}

function swapLegsB() {
  let legsContainer = document.getElementById('legsContainer');

  index = (index - 1 + legs.length) % legs.length;

  legsContainer.src = legs[index];
}

function noLayout() {
  document.getElementById('cards').classList = [];
}

function verticalLayout() {
  document.getElementById('cards').classList = [];
  document.getElementById('cards').classList.add('vertical');
}

function horizontalLayout() {
  document.getElementById('cards').classList = [];
  document.getElementById('cards').classList.add('horizontal');
}

function gridLayout() {
  document.getElementById('cards').classList = [];
  document.getElementById('cards').classList.add('grid');
}
