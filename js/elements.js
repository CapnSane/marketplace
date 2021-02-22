// Toggle function: hide and show
function toggleShop() {
  var x = document.getElementById("shop");
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }
  x.classList.toggle("hide");
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
  App.store.cart.push(parseInt(card.getAttribute("id")));
  document.getElementById("cardCount").innerHTML = App.store.cart.length;
  card.classList.add("hide");
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
  // console.log(input.value);
  // cards.map(card => {
  //   console.log("filtrar! ", card.type)
  // });
  // cards.map(card => {console.log(document.getElementById(card.id))});
  // const text = event.element.value;
  // console.log(text);
  // cards.map(card => {
  //   const input = document.getElementById("myInput");
  //   console.log("filtrar! ", card.type)
  //   console.log("match com: ", text)
  //   console.log("elemento: ", cardElem)
  //   console.log("includes:", card.type.includes(text))
  // })

  // const text = document.getElementById("myInput").value;
  // console.log(text);
  // cards.map(card => {
  //   console.log("filtrar! ", card.type)
  //   console.log("match com: ", text)
  //   console.log("elemento: ", cardElem)
  //   console.log("includes:", card.type.toLowerCase().includes(text.toLowerCase()))
  // })
  const text = document.getElementById("myInput").value;
  cards.forEach((card, index) => {
    const cardBg = App.elements.cards[index];
    if (
      card.type.toLowerCase().includes(text.toLowerCase()) ||
      card.name.toLowerCase().includes(text.toLowerCase()) ||
      card.defense == text ||
      card.area == text ||
      card.attack == text ||
      card.cost == text ||
      card.price == text
    ) {
      // Mostra carta
      cardBg.classList.remove("hide")
    } else {
      // esconde carta
      cardBg.classList.add("hide")
    }
  })


}