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
var span = document.getElementsByClassName("close")[0];

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
  // document.getElementById(cardObj.id).remove();
  console.log(card.getAttribute("id"));
  App.store.cart.push(card.getAttribute("id"));
  document.getElementById("cardCount").innerHTML = App.store.cart.length;
  card.classList.add("hide");
}