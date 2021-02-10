function createCard(i) {
  let cardbg = document.createElement("div");
  let cardimg = document.createElement("div");
  let cardText = document.createElement("div");
  let cardtype = document.createElement("span");
  let cardtitle = document.createElement("h2");
  let carddescription = document.createElement("p");
  let cardstats = document.createElement("div");
  let cardstats1 = document.createElement("div");
  let cardstats2 = document.createElement("div");
  let cardstats3 = document.createElement("div");
  let cardstats4 = document.createElement("div");

  let cardobj = cards[i];

  // Card base - Here is where the card elements are appended
  cardbg.style.display = "grid";
  cardbg.style.zIndex = "2";
  cardbg.style.gridTemplateColumns = "300px";
  cardbg.style.gridTemplateRows = "210px 210px 80px";
  cardbg.style.gridTemplateAreas = "image text stats";
  cardbg.style.border = "2px solid " + cardobj.color;
  cardbg.style.borderRadius = "18px";
  cardbg.style.background = "white";
  cardbg.style.boxShadow = "5px 5px 15px rgba(0,0,0,0.9)";
  cardbg.style.fontFamily = "roboto";
  cardbg.style.textAlign = "center";
  cardbg.style.transition = "0.5s ease";
  cardbg.style.cursor = "pointer";
  cardbg.style.margin = "30px";
  cardbg.onmouseover = function () {
    this.style.transform = "scale(105%)";
    this.style.boxShadow = "5px 5px 25px rgba(0, 0, 0, 0.6)";
  };
  cardbg.onmouseout = function () {
    this.style.transform = "scale(100%)";
    this.style.boxShadow = "5px 5px 15px rgba(0,0,0,0.9)";
  };

  // Card image
  cardimg.style.background = cardobj.img;
  cardimg.style.backgroundSize = "cover";
  cardimg.style.borderTopLeftRadius = "15px";
  cardimg.style.borderTopRightRadius = "15px";

  // Card textbox - Type, title and description card is appended here
  cardText.style.marginTop = "4px";
  
  // Card colours and borders - Here is where the card type text is added
  cardtype.style.gridArea = "text";
  cardtype.style.fontSize = "13px";
  cardtype.style.background = "rgb(230,230,230)";
  cardtype.style.borderRadius = "30px";
  cardtype.style.padding = "0 8px 0 8px";
  cardtype.style.color = cardobj.color;
  cardtype.innerHTML = cardobj.type;
  
  // Card title text
  cardtitle.innerHTML = cardobj.name;
  cardtitle.style.marginTop = "8px";
  cardtitle.style.color = cardobj.color;
  cardtitle.style.fontSize = "24px";
  cardtitle.style.fontWeight = "bold";
  
  // Card description text
  carddescription.innerHTML = cardobj.description;
  carddescription.style.color = cardobj.color;
  carddescription.style.margin = "10px 18px 0 18px";
  carddescription.style.fontSize = "13px";
  carddescription.style.textAlign= "center";
  carddescription.style.fontWeight = "bold";

  carddescription.onmouseover = function () {
    this.style.fontWeight = "bolder";
  };
  carddescription.onmouseout = function () {
    this.style.fontWeight = "bold";
  };

  cardstats.style.gridArea = "stats;"
  cardstats.style.display = "grid";

  if (cardobj.type == "Ground") {
    cardstats.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
  } else if (cardobj.type == "Castle") {
    cardstats.style.gridTemplateColumns = "1fr 1fr";
  } else {
    cardstats.style.gridTemplateColumns = "1fr 1fr 1fr";
  };

  cardstats.style.gridTemplateRows = "1fr";
  cardstats.style.borderBottomLeftRadius = "15px";
  cardstats.style.borderBottomRightRadius = "15px";
  cardstats.style.padding = "20px 15px 0 15px";
  cardstats.style.color = "white";
  cardstats.style.fontSize = "16px";
  cardstats.style.background = cardobj.color;

  if (cardobj.type == "Ground") {
    cardstats1.innerHTML = cardobj.area + "<br>" + "Area";
    cardstats2.innerHTML = cardobj.defence + "<br>" + "Defence";
    cardstats3.innerHTML = cardobj.capacity + "<br>" + "Capacity";
    cardstats4.innerHTML = cardobj.cost + "<br>" + "Cost";
  } else if (cardobj.type == "Castle") {
    cardstats1.innerHTML = cardobj.capacity + "<br>" + "Capacity";
    cardstats2.innerHTML = cardobj.defence + "<br>" + "Defence";
  } else {
    cardstats1.innerHTML = cardobj.attack + "<br>" + "Attack";
    cardstats2.innerHTML = cardobj.defence + "<br>" + "Defence";
    cardstats3.innerHTML = cardobj.cost + "<br>" + "Cost";
  };

  cardstats1.onmouseover = function () {
    this.style.fontWeight = "bold";
  };
  cardstats1.onmouseout = function () {
    this.style.fontWeight = "normal";
  };
  cardstats2.onmouseover = function () {
    this.style.fontWeight = "bold";
  };
  cardstats2.onmouseout = function () {
    this.style.fontWeight = "normal";
  };
  cardstats3.onmouseover = function () {
    this.style.fontWeight = "bold";
  };
  cardstats3.onmouseout = function () {
    this.style.fontWeight = "normal";
  };
  cardstats4.onmouseover = function () {
    this.style.fontWeight = "bold";
  };
  cardstats4.onmouseout = function () {
    this.style.fontWeight = "normal";
  };

  document.body.appendChild(cardbg);
  cardbg.appendChild(cardimg);
  cardbg.appendChild(cardText);
  cardText.appendChild(cardtype);
  cardText.appendChild(cardtitle);
  cardText.appendChild(carddescription);
  cardbg.appendChild(cardstats);
  cardstats.appendChild(cardstats2);
  cardstats.appendChild(cardstats1);
  cardstats.appendChild(cardstats3);
  cardstats.appendChild(cardstats4);
}
// for (let i = 0; i < cards.length; i++) {
//   let cardobj = cards[i];
// }
// console.log(cardobj.img);



// createCard(0)