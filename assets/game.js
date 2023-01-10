var question = "";
var index = -1;
var guesses = 0;
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

var game_buildings = buildings;
const game_button = document.getElementsByClassName("game-button");

game_buildings = shuffle(buildings);
roll();

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

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

function roll() {
  let clickon = document.getElementById("click-on");
  index++;
  if (index == game_buildings.length) {
    console.log("got to the end");
  } else {
    question = game_buildings[index];
    console.log("click on " + question);
  }
  clickon.textContent = "Click on " + question;
}

function guess(guessed_location) {
  let btn = document.getElementById(question);
  console.log("this is " + guessed_location);
  if (question == guessed_location) {
    console.log("yes!!");
    switch (guesses) {
      case 0:
        btn.style.background = "#00ff00";
        btn.innerText = question;
        break;
      case 1:
        btn.style.background = "#f6d32d";
        btn.innerText = question;
        break;
      case 2:
        btn.style.background = "#ff9933";
        btn.innerText = question;
        break;
    }
    guesses = 0;
    roll();
  } else {
    console.log("no :(((");
    guesses++;
    if (guesses >= 3) {
      console.log("even after 3 attps you got wrong");
      btn.style.background = "red";
      btn.innerText = question;
      guesses = 0;
      roll();
    }
  }
}
