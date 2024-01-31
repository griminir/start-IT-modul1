let inventory = false;
let item = '0';
let soldItemId = '';

function toggleInv() {
  if (inventory === false) {
    openInv();
  } else {
    closeInv();
  }
}

function openInv() {
  for (let i = 1; i < 2; i++) {
    document.getElementById('inventory').innerHTML += /*html*/ `
  <div class='inventoryOpen'><img class="item" src="img/item${item}.gif"/></div>`;
    inventory = !inventory;
  }
}

function closeInv() {
  document.getElementById('inventory').innerHTML = /*html*/ `
    <div class="inventoryClosed"></div>`;
  inventory = !inventory;
}

function getItem(number) {
  if (number === 4) {
    document.querySelector('.hp').innerHTML = /*html*/ `
      <img src="img/damageHpBar.jpg" alt="damage Hp">
    `;
    item = number;
    soldItemId = number;
    soldItem();
    openInv();
  } else if (number === 3) {
    document.querySelector('.hp').innerHTML = /*html*/ `
      <img src="img/hpbarfull.jpg" alt="damage Hp">
    `;
    item = number;
    soldItemId = number;
    soldItem();
    openInv();
  } else {
    item = number;
    soldItemId = number;
    soldItem();
    openInv();
  }
}

function soldItem() {
  document.getElementById(soldItemId).innerHTML = /*html*/ `
  <img class="item" src="img/sold.png" alt="sold" />
  `;
}

function speak() {
  document.querySelector('#pitch').innerHTML = /*html*/ `
    <span>"DO NOT DUPLICATE MY ITEMS!!"<span>
  `;
}
