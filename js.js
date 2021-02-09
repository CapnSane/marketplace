function createCard(i) {
  let cardbg = document.createElement("div");
  let cardimg = document.createElement("div");
  let cardText = document.createElement("div");
  let cardtype = document.createElement("span");
  let cardtitle = document.createElement("h2");
  let carddescription = document.createElement("p");
  let cardstats = document.createElement("div");

  let cardobj = cards[i];

  cardbg.style.display = "grid";
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

  cardimg.style.background = cardobj.img;
  cardimg.style.backgroundSize = "cover";
  cardimg.style.borderTopLeftRadius = "15px";
  cardimg.style.borderTopRightRadius = "15px";

  cardtype.style.gridArea = "text";
  cardtype.style.fontSize = "13px";
  cardtype.style.background = "rgb(230,230,230)";
  cardtype.style.borderRadius = "30px";
  cardtype.style.padding = "0 8px 0 8px";
  cardtype.style.color = cardobj.color;
  cardtype.innerHTML = cardobj.type;
  
  cardText.style.marginTop = "4px";
  carddescription.style.textAlign= "justify";
  
  cardtitle.innerHTML = cardobj.name;
  cardtitle.style.marginTop = "8px";
  cardtitle.style.color = cardobj.color;
  cardtitle.style.fontSize = "24px";
  
  carddescription.innerHTML = cardobj.description;
  carddescription.style.color = cardobj.color;
  carddescription.style.margin = "10px 18px 0 18px";
  carddescription.style.fontSize = "15px";

  cardstats.style.gridArea = "stats;"
  cardstats.style.display = "grid";
  // if (carbobj.type == "Ground") {
  //   cardstats.style.gridTemplateColumns = "1fr 1fr 1fr";
  // } else {
  //   cardstats.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
  // };
  cardstats.style.gridTemplateRows = "1fr";
  cardstats.style.borderBottomLeftRadius = "15px";
  cardstats.style.borderBottomRightRadius = "15px";
  cardstats.style.background = "rgb(0, 31, 5)";
  // if (carbobj.type == "Ground") {
  //   cardstats.innerHTML = cardobj.area;
  //   cardstats.innerHTML = cardobj.defence;
  //   cardstats.innerHTML = cardobj.capacity;
  //   cardstats.innerHTML = cardobj.cost;
  // } else {
  //   cardstats.innerHTML = cardobj.attack;
  //   cardstats.innerHTML = cardobj.defence;
  //   cardstats.innerHTML = cardobj.cost;
  // };

  document.body.appendChild(cardbg);
  cardbg.appendChild(cardimg);
  cardbg.appendChild(cardText);
  cardText.appendChild(cardtype);
  cardText.appendChild(cardtitle);
  cardText.appendChild(carddescription);
}
// for (let i = 0; i < cards.length; i++) {
//   let cardobj = cards[i];
// }
// console.log(cardobj.img);
console.log(cards.length);

for (let i = 0; i < cards.length; i++) {
  createCard(i);
}

// createCard(0)