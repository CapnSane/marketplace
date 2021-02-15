function createCard(i) {
  const cardBg = document.createElement("div");
  const cardImg = document.createElement("div");
  const cardText = document.createElement("div");
  const cardType = document.createElement("span");
  const cardTitle = document.createElement("h2");
  const cardDescription = document.createElement("p");
  const cardStats = document.createElement("div");
  const cardStats1 = document.createElement("div");
  const cardStats2 = document.createElement("div");
  const cardStats3 = document.createElement("div");
  const cardStats4 = document.createElement("div");

  let cardobj = cards[i];

  // Card base - Here is where the card elements are appended
  cardBg.style.display = "grid";
  cardBg.style.zIndex = "2";
  cardBg.style.gridTemplateColumns = "300px";
  cardBg.style.width = "304px";
  cardBg.style.gridTemplateRows = "210px 210px 80px";
  cardBg.style.gridTemplateAreas = "image text stats";
  cardBg.style.border = "2px solid " + cardobj.color;
  cardBg.style.borderRadius = "18px";
  cardBg.style.background = cardobj.color;
  cardBg.style.boxShadow = "5px 5px 15px rgba(0,0,0,0.9)";
  cardBg.style.fontFamily = "roboto";
  cardBg.style.textAlign = "center";
  cardBg.style.transition = "0.5s ease";
  cardBg.style.cursor = "pointer";
  cardBg.style.margin = "30px";
  cardBg.style.float = "right";
  cardBg.onmouseover = function () {
    this.style.transform = "scale(108%)";
    this.style.boxShadow = "5px 5px 25px rgba(0, 0, 0, 0.6)";
  };
  cardBg.onmouseout = function () {
    this.style.transform = "scale(100%)";
    this.style.boxShadow = "5px 5px 15px rgba(0,0,0,0.9)";
  };

  // Card image
  cardImg.style.background = cardobj.img;
  cardImg.style.backgroundSize = "cover";
  cardImg.style.borderTopLeftRadius = "15px";
  cardImg.style.borderTopRightRadius = "15px";

  // Card textbox - Type, title and description card is appended here
  cardText.style.marginTop = "4px";
  cardText.style.background = "white";
  
  // Card colours and borders - Here is where the card type text is added
  cardType.style.gridArea = "text";
  cardType.style.fontSize = "13px";
  cardType.style.background = "rgb(230,230,230)";
  cardType.style.borderRadius = "30px";
  cardType.style.padding = "0 8px 0 8px";
  cardType.style.color = cardobj.color;
  cardType.innerHTML = cardobj.type;
  
  // Card title text
  cardTitle.innerHTML = cardobj.name;
  cardTitle.style.marginTop = "8px";
  cardTitle.style.color = cardobj.color;
  cardTitle.style.fontSize = "24px";
  cardTitle.style.fontWeight = "bold";
  
  // Card description text
  cardDescription.innerHTML = cardobj.description;
  cardDescription.style.color = cardobj.color;
  cardDescription.style.padding = "6px 20px 0 20px";
  cardDescription.style.fontSize = "13px";
  cardDescription.style.textAlign= "center";
  cardDescription.style.fontWeight = "bold";

  cardDescription.onmouseover = function () {
    this.style.fontWeight = "bolder";
  };
  cardDescription.onmouseout = function () {
    this.style.fontWeight = "bold";
  };

  cardStats.style.gridArea = "stats;"
  cardStats.style.display = "grid";

  if (cardobj.type == "Ground") {
    cardStats.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
  } else if (cardobj.type == "Castle") {
    cardStats.style.gridTemplateColumns = "1fr 1fr";
  } else {
    cardStats.style.gridTemplateColumns = "1fr 1fr 1fr";
  };

  cardStats.style.gridTemplateRows = "1fr";
  cardStats.style.borderBottomLeftRadius = "15px";
  cardStats.style.borderBottomRightRadius = "15px";
  cardStats.style.padding = "20px 15px 0 15px";
  cardStats.style.color = "white";
  cardStats.style.fontSize = "16px";
  cardStats.style.background = cardobj.color;

  if (cardobj.type == "Ground") {
    cardStats1.innerHTML = cardobj.area + "<br>" + "Area";
    cardStats2.innerHTML = cardobj.defense + "<br>" + "Defense";
    cardStats3.innerHTML = cardobj.capacity + "<br>" + "Capacity";
    cardStats4.innerHTML = cardobj.cost + "<br>" + "Cost";
  } else if (cardobj.type == "Castle") {
    cardStats1.innerHTML = cardobj.area + "<br>" + "Area";
    cardStats2.innerHTML = cardobj.defense + "<br>" + "Defense";
  } else {
    cardStats1.innerHTML = cardobj.attack + "<br>" + "Attack";
    cardStats2.innerHTML = cardobj.defense + "<br>" + "Defense";
    cardStats3.innerHTML = cardobj.cost + "<br>" + "Cost";
  };

  cardStats1.onmouseover = function () {
    this.style.fontWeight = "bold";
  };
  cardStats1.onmouseout = function () {
    this.style.fontWeight = "normal";
  };
  cardStats2.onmouseover = function () {
    this.style.fontWeight = "bold";
  };
  cardStats2.onmouseout = function () {
    this.style.fontWeight = "normal";
  };
  cardStats3.onmouseover = function () {
    this.style.fontWeight = "bold";
  };
  cardStats3.onmouseout = function () {
    this.style.fontWeight = "normal";
  };
  cardStats4.onmouseover = function () {
    this.style.fontWeight = "bold";
  };
  cardStats4.onmouseout = function () {
    this.style.fontWeight = "normal";
  };

  document.getElementById("cardDiv").appendChild(cardBg);
  cardBg.appendChild(cardImg);
  cardBg.appendChild(cardText);
  cardText.appendChild(cardType);
  cardText.appendChild(cardTitle);
  cardText.appendChild(cardDescription);
  cardBg.appendChild(cardStats);
  cardStats.appendChild(cardStats2);
  cardStats.appendChild(cardStats1);
  cardStats.appendChild(cardStats3);
  cardStats.appendChild(cardStats4);
}
// for (let i = 0; i < cards.length; i++) {
//   let cardobj = cards[i];
// }
// console.log(cardobj.img);



// createCard(0)