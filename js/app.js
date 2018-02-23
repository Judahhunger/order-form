'use strict';



BusProduct.allProducts = [];//array of all instances for products.
var orderForm = document.getElementById('orderForm');
var formSelector = document.getElementById('buyProduct');//getting selector to append options to it.
var GotoCart = document.getElementById('cart');
//constructor of BusMall products.
// Text inputs for each of: name, street, city, state, ZIP code, and phone number
function BusProduct(name, total, user, street, city, state, zip, filepath){
  this.name = name;
  this.total = total;
  this.user = user;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.filepath = filepath;
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
function eventHandler(event){
  event.preventDefault();

  var newName = event.target.name.value;
  var newTotal = event.target.total.value;
  var newUser = event.target.user.value;
  var newStreet = event.target.street.value;
  var newCity = event.target.city.value;
  var newState = event.target.state.value;
  var newZip = event.target.zip.value;

  new BusProduct(newName, newTotal, newUser, newStreet, newCity, newState, newZip);
  
  localStorage.setItem('BusProduct', JSON.stringify(BusProduct.allProducts));
  event.target.reset();
}

renderSelection();
orderForm.addEventListener('submit', eventHandler);
GotoCart.addEventListener('click',function(){ window.location = 'cart.html';});