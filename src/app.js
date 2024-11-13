const suits = ["hearts", "diamonds", "clubs", "spades"];
const values = ["7", "8", "9", "10", "J", "Q", "K"];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getSymbol(suit) {
  switch (suit) {
    case "hearts":
      return "♥";
    case "diamonds":
      return "♦";
    case "clubs":
      return "♣";
    case "spades":
      return "♠";
    default:
      return "";
  }
}

function generateRandomCard() {
  const card = document.getElementById("card");
  const symbolTop = document.getElementById("symbol-top-left");
  const symbolBottom = document.getElementById("symbol-bottom-right");
  const cardValue = document.getElementById("card-value");

  if (!card || !symbolTop || !symbolBottom || !cardValue) {
    // eslint-disable-next-line no-console
    console.error("Uno o más elementos no se encontraron en el DOM.");
    return;
  }

  const randomSuit = getRandomElement(suits);
  const randomValue = getRandomElement(values);

  card.className = `card border-0 shadow d-flex flex-column align-items-center justify-content-center bg-white rounded ${randomSuit}`;
  symbolTop.innerHTML = getSymbol(randomSuit);
  symbolBottom.innerHTML = getSymbol(randomSuit);
  cardValue.innerHTML = randomValue;

  symbolTop.classList.remove("red", "black");
  symbolBottom.classList.remove("red", "black");
  cardValue.classList.remove("red", "black");

  const colorClass =
    randomSuit === "hearts" || randomSuit === "diamonds" ? "red" : "black";
  symbolTop.classList.add(colorClass);
  symbolBottom.classList.add(colorClass);
  cardValue.classList.add(colorClass);
}

function updateCardSize() {
  const width = document.getElementById("width").value || 100;
  const height = document.getElementById("height").value || 150;

  const card = document.getElementById("card");
  card.style.width = `${width}px`;
  card.style.height = `${height}px`;

  const scaleFactor = Math.min(width, height) / 150;
  const cardValue = document.getElementById("card-value");
  const symbolTop = document.getElementById("symbol-top-left");
  const symbolBottom = document.getElementById("symbol-bottom-right");

  if (cardValue && symbolTop && symbolBottom) {
    cardValue.style.fontSize = `${scaleFactor * 2}em`;
    symbolTop.style.fontSize = `${scaleFactor * 1.5}em`;
    symbolBottom.style.fontSize = `${scaleFactor * 1.5}em`;
  }
}

window.onload = () => {
  generateRandomCard();
  document
    .getElementById("newCardButton")
    .addEventListener("click", generateRandomCard);
};
