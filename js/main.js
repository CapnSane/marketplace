let App = {
  init: function () {
    // this.elements.createElements();
    const locSearch = new URLSearchParams(document.location.pathname);
    if (locSearch.has("/cards.html")) {
      snowing()
      App.elements.cards = App.model.cards.map(createCardWithPrice);
      App.elements.cards.forEach(priceCardElem => document.getElementById("cardDiv").appendChild(priceCardElem));
    } else {
      burning()
    }
    // locSearch.has("/cards.html") ? this.controllers.createSnow() : this.controllers.createFire();

  },
  model: {
    cards: cards,
    myCards: [],
    store: {
      cart: [],
    },
  },
  controllers: {
  },
  elements: {
  },
};

App.init();