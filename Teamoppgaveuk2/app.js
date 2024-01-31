let inventory = false;
let item = '0';
let soldItemId = '';

function openInv() {
  if (inventory === false) {
    document.getElementById('inventory').innerHTML = /*html*/ `
  <div class='inventoryOpen'><img class="item" src="img/item${item}.gif"/></div>`;
    inventory = !inventory;
  } else {
    document.getElementById('inventory').innerHTML = /*html0*/ `
    <div class="inventoryClosed"></div>`;
    inventory = !inventory;
  }
}

function getItem(number) {
  item = number;
  soldItemId = number;
  soldItem();
}

function soldItem() {
  document.getElementById(soldItemId).innerHTML = /*html*/ `
  <img class="item" src="img/sold.png" alt="sold" />
  `;
}
