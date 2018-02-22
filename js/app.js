'use strict';



BusProduct.allProducts = [];//array of all instances for products.
var formSelector = document.getElementById('buyProduct');//getting selector to append options to it.
//constructor of BusMall products.
function BusProduct(name, filepath){
  this.name = name;
  this.filepath = filepath;//pulling the img from folder it's located in
  this.clicks = 0;// tracks each time that instance/img is clicked on.
  BusProduct.allProducts.push(this);//pushes all instances and properties into the array of all instances
}

new BusProduct('bag', 'img/bag.jpg');
new BusProduct('banana', 'img/banana.jpg');
new BusProduct('bathroom', 'img/bathroom.jpg');
new BusProduct('boots', 'img/boots.jpg');
new BusProduct('breakfast', 'img/breakfast.jpg');
new BusProduct('bubblegum', 'img/bubblegum.jpg');
new BusProduct('chair', 'img/chair.jpg');
new BusProduct('cthulhu', 'img/cthulhu.jpg');
new BusProduct('dog-duck', 'img/dog-duck.jpg');
new BusProduct('dragon', 'img/dragon.jpg');
new BusProduct('pen', 'img/pen.jpg');
new BusProduct('pet-sweep', 'img/pet-sweep.jpg');
new BusProduct('scissors', 'img/scissors.jpg');
new BusProduct('shark', 'img/shark.jpg');
new BusProduct('sweep', 'img/sweep.png');
new BusProduct('tauntaun', 'img/tauntaun.jpg');
new BusProduct('unicorn', 'img/unicorn.jpg');
new BusProduct('usb', 'img/usb.gif');
new BusProduct('water-can', 'img/water-can.jpg');
new BusProduct('wine-glass', 'img/wine-glass.jpg');

function renderSelection(){
  for(var i = 0; i < BusProduct.allProducts.length; i++){
    var product = document.createElement('option');
    // product.setAttribute('value', BusProduct.name[i]);
    product.textContent = BusProduct.allProducts[i].name;
    formSelector.appendChild(product);
  }
}

renderSelection();