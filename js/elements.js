// Toggle function: hide and show
function toggleShop() {
  var x = document.getElementById("shop");
  x.classList.toggle("hide");
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }
}

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementById("closeRules");
// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Click counter
function handleCard(card) {
  // console.log(card.getAttribute("id"));
  const clone = card.cloneNode(true);
  // clone.firstChild.style.display = "grid";
  clone.style.textAlign = "center";
  clone.style.margin = "0 0 0 0";
  clone.style.width = "360px";
  clone.style.float = "none";
  clone.firstChild.nextSibling.classList.remove("blink");
  clone.style.transform = "scale(50%)";
  clone.firstChild.nextSibling.style.fontSize = "60px";
  
  
  clone.onclick = function () {
    this.remove();
    card.classList.remove("hide");
    App.store.cart = App.store.cart.filter(c => card.getAttribute("id") != c);
    document.getElementById("cardCount").innerHTML = App.store.cart.length;
    console.log(App.store.cart = App.store.cart.filter(c => card.getAttribute("id") != c));

    // Card prices subtraction
    let cartCards = App.store.cart.map(id => App.model.cards.filter(card => card.id == id)[0]);
    let priceResult = (cartCards.map(card => card.price).reduce((acc,price) => acc + price, 0)).toFixed(2);
    document.getElementById("priceSum").innerHTML = "Total price: US$" + priceResult;
    if (cartCards.length == 0) {
      modalShop.style.display = "none";
    }
  }
  
  
  document.getElementById("shopDiv").appendChild(clone);
  App.store.cart.push(parseInt(card.getAttribute("id")));
  document.getElementById("cardCount").innerText = App.store.cart.length;
  console.log(App.store.cart.length);
  card.classList.add("hide");

  // Card prices sum
  let cartCards = App.store.cart.map(id => App.model.cards.filter(card => card.id == id)[0]);
  let priceResult = (cartCards.map(card => card.price).reduce((acc,price) => acc + price, 0)).toFixed(2);
  document.getElementById("priceSum").innerText = "Total price: US$" + priceResult;

  // console.log((cartCards.map(card => card.price).reduce((acc,price) => acc + price, 0)).toFixed(2));
  // console.log(cartCards);
  // console.log(App.store.cart.length);
  // console.log(card1.map(card1 => card1.price));
  // console.log(card.price);
}

// Get the Shop modal
var modalShop = document.getElementById("shopModal");
// Get the button that opens the Shop modal
var btnShop = document.getElementById("shopBtn");
// Get the <closeShop> element that closes the Shop modal
var closeShop = document.getElementById("closeShop");
// When the user clicks the button, open the Shop modal 
btnShop.onclick = function () {
  modalShop.style.display = "block";

  console.log(App.store.cart);
  console.log(cards.filter(card => App.store.cart.includes(card.id)));
}
// When the user clicks on <closeShop> (x), close the Shop modal
closeShop.onclick = function () {
  modalShop.style.display = "none";
}
// When the user clicks anywhere outside of the Shop modal, close it
window.onclick = function (event) {
  if (event.target == modalShop) {
    modalShop.style.display = "none";
  }
}

// Page overlay with coming soon
function on() {
  document.getElementById("overlay").style.display = "block";
}
function off() {
  document.getElementById("overlay").style.display = "none";
}

// Search bar
function searchBar() {

  const text = document.getElementById("myInput").value;
  cards.forEach((card, index) => {
    const divParent = App.elements.cards[index];
    if (
      card.type.toLowerCase().includes(text.toLowerCase()) ||
      card.name.toLowerCase().includes(text.toLowerCase()) ||
      card.colorName.toLowerCase().includes(text.toLowerCase()) ||
      card.defense == text ||
      card.area == text ||
      card.attack == text ||
      card.cost == text ||
      card.price == text
    ) {
      // Show card
      divParent.classList.remove("hide")
    } else {
      // Hide card
      divParent.classList.add("hide")
    }
  })
}