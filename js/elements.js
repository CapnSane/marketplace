// Toggle function: hide and show
function toggleShop() {
  var x = document.getElementById('shop');
  x.classList.toggle('hide');
  var y = document.getElementById('myCardsDiv');
  y.classList.add('hide');
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }
}

// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById('myBtn');
// Get the <span> element that closes the modal
var span = document.getElementById('closeRules');
// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Click counter
function handleCard(card) {
  // console.log(card.getAttribute("id"));
  const clone = card.cloneNode(true);
  // clone.firstChild.style.display = "grid";
  clone.style.textAlign = 'center';
  clone.style.margin = '0 0 0 0';
  clone.style.width = '360px';
  clone.style.float = 'none';
  clone.firstChild.nextSibling.classList.remove('blink');
  clone.style.transform = 'scale(50%)';
  clone.firstChild.nextSibling.style.fontSize = '60px';

  let buyButton = document.createElement('button');
  buyButton.innerText = 'BUY!';
  buyButton.style.border = '2px solid black';
  buyButton.style.boxShadow = '3px 3px 10px black';
  buyButton.style.marginLeft = '30px';
  buyButton.style.borderRadius = '15px';
  buyButton.style.fontWeight = 'bold';
  buyButton.style.backgroundColor = 'rgb(234, 255, 0)';
  buyButton.style.outline = 'none';
  buyButton.setAttribute('id', 'buyButton');
  buyButton.onmouseover = function () {
    buyButton.style.backgroundColor = 'rgb(236, 255, 30)';
    buyButton.style.transform = 'scale(104%)';
  };
  buyButton.onmouseout = function () {
    buyButton.style.backgroundColor = 'rgb(234, 255, 0)';
    buyButton.style.transform = 'scale(100%)';
  };

  clone.onclick = function () {
    this.remove();
    card.classList.remove('hide');
    App.model.store.cart = App.model.store.cart.filter(
      (c) => card.getAttribute('id') != c
    );
    document.getElementById('cardCount').innerHTML =
      App.model.store.cart.length;
    console.log(
      (App.model.store.cart = App.model.store.cart.filter(
        (c) => card.getAttribute('id') != c
      ))
    );

    // Card prices subtraction
    let cartCards = App.model.store.cart.map(
      (id) => App.model.cards.filter((card) => card.id == id)[0]
    );
    let priceResult = cartCards
      .map((card) => card.price)
      .reduce((acc, price) => acc + price, 0)
      .toFixed(2);
    document.getElementById('priceSum').innerHTML =
      'Total price: US$' + priceResult;
    document.getElementById('priceSum').appendChild(buyButton);

    if (cartCards.length == 0) {
      modalShop.style.display = 'none';
    }
  };

  document.getElementById('shopDiv').appendChild(clone);
  App.model.store.cart.push(parseInt(card.getAttribute('id')));
  document.getElementById('cardCount').innerText = App.model.store.cart.length;
  card.classList.add('hide');

  // Card prices sum
  let cartCards = App.model.store.cart.map(
    (id) => App.model.cards.filter((card) => card.id == id)[0]
  );
  let priceResult = cartCards
    .map((card) => card.price)
    .reduce((acc, price) => acc + price, 0)
    .toFixed(2);
  document.getElementById('priceSum').innerText =
    'Total price: US$' + priceResult;
  document.getElementById('priceSum').appendChild(buyButton);

  // Buy button click to buy
  document.getElementById('buyButton').onclick = () => {
    App.model.myCards = App.model.myCards.concat(cartCards);
    App.model.store.cart = [];
    document.getElementById('shopDiv').innerHTML = '';
    document.getElementById('cardCount').innerText = '0';
    modalShop.style.display = 'none';
    const sDiv = document.createElement('div');
    const pShop = document.createElement('p');
    const cShop = document.createElement('span');

    sDiv.setAttribute('class', 'modal-content');
    sDiv.style.flexDirection = 'initial !important';
    sDiv.style.minWidth = '33vw !important';
    sDiv.style.float = 'left !important';
    sDiv.style.top = '0 !important';

    cShop.setAttribute('id', 'shopDiv');
    cShop.setAttribute('class', 'close');
    cShop.style.height = '2vw';
    cShop.innerText = 'x';

    pShop.setAttribute('class', 'shop-text');
    // pShop.innerHTML = "Shop";

    document.getElementById('divExtra').appendChild(sDiv);
    sDiv.appendChild(cShop);
    sDiv.appendChild(pShop);
  };
  // console.log((cartCards.map(card => card.price).reduce((acc,price) => acc + price, 0)).toFixed(2));
  // console.log(cartCards);
  // console.log(App.model.store.cart.length);
  // console.log(card1.map(card1 => card1.price));
  // console.log(card.price);
}

// Get the Shop modal
var modalShop = document.getElementById('shopModal');
// Get the button that opens the Shop modal
var btnShop = document.getElementById('shopBtn');
// Get the <closeShop> element that closes the Shop modal
var closeShop = document.getElementById('closeShop');
// When the user clicks the button, open the Shop modal
btnShop.onclick = function () {
  modalShop.style.display = 'block';

  console.log(App.model.store.cart);
  console.log(cards.filter((card) => App.model.store.cart.includes(card.id)));
};
// When the user clicks on <closeShop> (x), close the Shop modal
closeShop.onclick = function () {
  modalShop.style.display = 'none';
};
// When the user clicks anywhere outside of the Shop modal, close it
window.onclick = function (event) {
  if (event.target == modalShop) {
    modalShop.style.display = 'none';
  }
};

// My cards section
function myCardsClick() {
  App.elements.myCards = App.model.myCards.map(createCard);
  console.log('jorge cards');
  const myCardsDiv = document.getElementById('myCardsDiv');
  myCardsDiv.innerHTML = '';
  App.elements.myCards.forEach((CardElem) => myCardsDiv.appendChild(CardElem));
  var x = document.getElementById('shop');
  x.classList.add('hide');
  myCardsDiv.classList.remove('hide');
  console.log(App.elements.myCards);
  console.log(App.model.myCards);
}

// Page overlay with coming soon
function on() {
  document.getElementById('overlay').style.display = 'block';
}
function off() {
  document.getElementById('overlay').style.display = 'none';
}

// Search bar
function searchBar() {
  const text = document.getElementById('myInput').value;
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
      divParent.classList.remove('hide');
    } else {
      // Hide card
      divParent.classList.add('hide');
    }
  });
}
