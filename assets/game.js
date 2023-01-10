var question = "SA";
var size = 49;
const buildings = [
  "AA",
  "AB",
  "AC",
  "AH",
  "AP",
  "AT",
  "CB",
  "CC",
  "CO",
  "DH",
  "DT",
  "FH",
  "FR",
  "GH",
  "GR",
  "GY",
  "HC",
  "HP",
  "HS",
  "IH",
  "LA",
  "LE",
  "LH",
  "LX",
  "MB",
  "MC",
  "ME",
  "ML",
  "NB",
  "NI",
  "NW",
  "PA",
  "PG",
  "PH",
  "RB",
  "RH",
  "RO",
  "RU",
  "SA",
  "SC",
  "SH",
  "SP",
  "SR",
  "TB",
  "TC",
  "TT",
  "UC",
  "VS",
];
const game_button = document.getElementsByClassName(game - button);

function listButtons() {
  let game_board = document.getElementById("game-board");
  for (let i = 0; i < buildings.length; i++) {
    let btn = document.createElement("button");
    btn.setAttribute("id", buildings[i]);
    btn.classList.add("game-button");
    let text = document.createTextNode("◯");
    btn.appendChild(text);
    btn.onclick = function () {
      guess(buildings[i]);
    };

    game_board.appendChild(btn);
  }
}

function roll(size) {
  rand = Math.random();
  rand = Math.floor(rand * size);
  // remove from buildings
  question = buildings[rand];
  console.log(buildings[rand]);
}

function guess(guessed_location) {
  console.log("this is " + guessed_location);
  if (question == guessed_location) {
    console.log("yes!!");
  } else {
    console.log("no :(((");
  }
  roll(size - 1);
}
