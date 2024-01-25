num1 = 0;
num2 = 0;
nyeTall();

function nyeTall() {
  num1 = document.getElementById('tall1').innerHTML = Math.floor(
    Math.random() * 11
  );
  num2 = document.getElementById('tall2').innerHTML = Math.floor(
    Math.random() * 11
  );
  return num1, num2;
}

let input = document.getElementById('input').value;
const greaterThen = '>';
const lesserThen = '<';
const same = '=';
let score = 0;

function answer() {
  let input = document.getElementById('input').value;

  if (num1 > num2 && input === greaterThen) {
    score++;

    document.getElementById('poeng').innerHTML = `Poeng: ${score}`;

    nyeTall();
  } else if (num1 < num2 && input === lesserThen) {
    score++;

    document.getElementById('poeng').innerHTML = `Poeng: ${score}`;

    nyeTall();
  } else if (num1 === num2 && input === same) {
    score++;

    document.getElementById('poeng').innerHTML = `Poeng: ${score}`;

    nyeTall();
  } else {
    score--;

    document.getElementById('poeng').innerHTML = `Poeng: ${score}`;

    nyeTall();
  }
}
