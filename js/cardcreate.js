function createCard(cardObj) {
  const divParent = document.createElement("div");
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
  const priceDiv = document.createElement("div");

  // Div of Divs
  divParent.style.display = "grid";
  divParent.style.zIndex = "2";
  divParent.style.float = "left";
  divParent.style.textAlign = "center";
  divParent.setAttribute("onclick",`handleCard(this)`);


  // Card base - Here is where the card elements are appended
  cardBg.style.display = "grid";
  cardBg.style.zIndex = "2";
  cardBg.style.gridTemplateColumns = "300px";
  cardBg.style.width = "304px";
  cardBg.style.gridTemplateRows = "210px 210px 80px";
  cardBg.style.gridTemplateAreas = "image text stats";
  cardBg.style.border = "2px solid " + cardObj.color;
  cardBg.style.borderRadius = "18px";
  cardBg.style.background = cardObj.color;
  cardBg.style.boxShadow = "5px 5px 15px rgba(0,0,0,0.9)";
  cardBg.style.fontFamily = "roboto";
  cardBg.style.textAlign = "center";
  cardBg.style.transition = "0.5s ease";
  cardBg.style.cursor = "pointer";
  cardBg.style.margin = "30px";
  cardBg.style.float = "left";
  cardBg.setAttribute("id", cardObj.id);
  // cardBg.setAttribute("onclick",`removeCard(${cardObj.id})`);
  cardBg.onmouseover = function () {
    this.style.transform = "scale(108%)";
    this.style.boxShadow = "5px 5px 25px rgba(0, 0, 0, 0.6)";
    priceDiv.classList.add("blink")
  };
  cardBg.onmouseout = function () {
    this.style.transform = "scale(100%)";
    this.style.boxShadow = "5px 5px 15px rgba(0,0,0,0.9)";
    priceDiv.classList.remove("blink")
  };

  // Card image
  cardImg.style.background = cardObj.img;
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
  cardType.style.color = cardObj.color;
  cardType.innerHTML = cardObj.type;
  
  // Card title text
  cardTitle.innerHTML = cardObj.name;
  cardTitle.style.marginTop = "8px";
  cardTitle.style.color = cardObj.color;
  cardTitle.style.fontSize = "24px";
  cardTitle.style.fontWeight = "bold";
  
  // Card description text
  cardDescription.innerHTML = cardObj.description;
  cardDescription.style.color = cardObj.color;
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

  if (cardObj.type == "Ground") {
    cardStats.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
  } else if (cardObj.type == "Castle") {
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
  cardStats.style.background = cardObj.color;

  if (cardObj.type == "Ground") {
    cardStats1.innerHTML = cardObj.area + "<br>" + "Area";
    cardStats2.innerHTML = cardObj.defense + "<br>" + "Defense";
    cardStats3.innerHTML = cardObj.capacity + "<br>" + "Capacity";
    cardStats4.innerHTML = cardObj.cost + "<br>" + "Cost";
  } else if (cardObj.type == "Castle") {
    cardStats1.innerHTML = cardObj.area + "<br>" + "Area";
    cardStats2.innerHTML = cardObj.defense + "<br>" + "Defense";
  } else {
    cardStats1.innerHTML = cardObj.attack + "<br>" + "Attack";
    cardStats2.innerHTML = cardObj.defense + "<br>" + "Defense";
    cardStats3.innerHTML = cardObj.cost + "<br>" + "Cost";
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
  
  priceDiv.innerHTML = "US$ " + cardObj.price;
  priceDiv.style.color = "white";
  priceDiv.style.textShadow = "3px 3px 5px black";
  priceDiv.style.fontSize = "36px";
  priceDiv.style.marginBottom = "50px";
  priceDiv.style.fontWeight = "bold";

  document.getElementById("cardDiv").appendChild(divParent);
  divParent.appendChild(cardBg);
  cardBg.appendChild(cardImg);
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
  divParent.appendChild(priceDiv);

  return cardBg;
}
// for (let i = 0; i < cards.length; i++) {
//   let cardObj = cards[i];
// }
// console.log(cardObj.img);



// createCard(0)