const table = document.getElementById("table");

const cards = document.getElementsByClassName("cards");

let gameOver = document.getElementById("gameOver");

let cartas = [];

let chack = [];

const imagens = [
  "bootstrap",
  "css",
  "electron",
  "firebase",
  "html",
  "javascript",
  "jquery",
  "mongo",
  "node",
  "react",
  "bootstrap",
  "css",
  "electron",
  "firebase",
  "html",
  "javascript",
  "jquery",
  "mongo",
  "node",
  "react",
];

embaralharImagens(imagens);

EstruturaCards(imagens);

criarCards(cartas);

function embaralharImagens(imagens) {
  for (let i = imagens.length - 1; i > 0; i--) {
    const x = Math.floor(Math.random() * (i + 1));
    [imagens[i], imagens[x]] = [imagens[x], imagens[i]];
  }
  return imagens;
}

function EstruturaCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    cartas.push({
      img: imagens[i],
      id: i,
      flipado: false,
    });
  }
}

function criarCards(cartas) {
  for (let i = 0; i < cartas.length; i++) {
    table.innerHTML += `<div class="cards"  id="${cartas[i].id}" onclick="flip(${cartas[i].id} )">
      <div class="cardFront" id="">
        <img src="./images/${cartas[i].img}.png" alt="" />
      </div>
      <div class="cardBack" id="">&lt/&gt</div>
    </div>`;
  }
}

function flip(i) {
  if (cartas[i].flipado === false && chack.length < 2) {
    cards[i].className += " flip";
    cartas[i].flipado = true;
    chack.push({ nome: cartas[i].img, id: i });

    checando();
  }
}

function checando() {
  if (checarGameOver(cartas) === false) {
    gameOver.style.display = "flex";
  }
  if (chack.length === 2 && chack[0].nome !== chack[1].nome) {
    setTimeout(unflip, 1000);
  }
  if (chack.length === 2 && chack[0].nome === chack[1].nome) {
    chack = [];
  }
}

function unflip() {
  cartas[chack[0].id].flipado = false;
  cartas[chack[1].id].flipado = false;

  cards[chack[0].id].className = "cards";
  cards[chack[1].id].className = "cards";

  chack = [];
}

function checarGameOver(cartas) {
  if (
    cartas[0].flipado === true &&
    cartas[1].flipado === true &&
    cartas[2].flipado === true &&
    cartas[3].flipado === true &&
    cartas[4].flipado === true &&
    cartas[5].flipado === true &&
    cartas[6].flipado === true &&
    cartas[7].flipado === true &&
    cartas[8].flipado === true &&
    cartas[9].flipado === true &&
    cartas[10].flipado === true &&
    cartas[11].flipado === true &&
    cartas[12].flipado === true &&
    cartas[13].flipado === true &&
    cartas[14].flipado === true &&
    cartas[15].flipado === true &&
    cartas[16].flipado === true &&
    cartas[17].flipado === true &&
    cartas[18].flipado === true &&
    cartas[19].flipado === true
  ) {
    gameOver.style.display = "flex";
  }
}

function reset() {
  gameOver.style.display = "none";
  table.innerHTML = "";

  cartas = [];

  chack = [];

  embaralharImagens(imagens);

  EstruturaCards(imagens);

  criarCards(cartas);
}
