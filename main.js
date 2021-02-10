let App = {
  init: function () {
    // this.elements.createElements();
    this.controllers.createCards();
    this.controllers.createSnow();
  },
  store: {},
  controllers: {
    createCards: function () {
      for (let i = 0; i < cards.length; i++) {
        createCard(i);
      }
    },
    createSnow: function () {
      snowing();
    }
  },
  elements: {
    app: null,

    // createApp: function () {
    //   this.app = document.getElementById("app");
    //   this.app.style.position = "absolute";
    //   this.app.style.width = "100%";
    //   this.app.style.height = "100%";
    // },

    // createElements: function () {
    //   this.createApp();
    // }
  },
};

App.init();