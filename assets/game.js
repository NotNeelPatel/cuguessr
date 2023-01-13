let buildings = [
  {
    building: "Architecture Building",
    acronym: "AA",
  },
  {
    building: "ARISE Building",
    acronym: "AB",
  },
  {
    building: "Athletics",
    acronym: "AC",
  },
  {
    building: "Alumni Hall",
    acronym: "AH",
  },
  {
    building: "Azrieli Pavillion",
    acronym: "AP",
  },
  {
    building: "Azrieli Theatre",
    acronym: "AT",
  },
  {
    building: "Canal Building",
    acronym: "CB",
  },
  {
    building: "Colonel By Child Care Centre",
    acronym: "CC",
  },
  {
    building: "Residence Commons",
    acronym: "CO",
  },
  {
    building: "Dundas House",
    acronym: "DH",
  },
  {
    building: "Dunton Tower",
    acronym: "DT",
  },
  {
    building: "Fieldhouse",
    acronym: "FH",
  },
  {
    building: "Frontenac House",
    acronym: "FR",
  },
  {
    building: "Glengarry House",
    acronym: "GH",
  },
  {
    building: "Grenville House",
    acronym: "GR",
  },
  {
    building: "Gymnasium",
    acronym: "GY",
  },
  {
    building: "Human Computer Interaction Building",
    acronym: "HC",
  },
  {
    building: "Herzberg Laboratories",
    acronym: "HP",
  },
  {
    building: "Health Sciences Building",
    acronym: "HS",
  },
  {
    building: "Ice House",
    acronym: "IH",
  },
  {
    building: "Loeb Building",
    acronym: "LA",
  },
  {
    building: "Leeds House",
    acronym: "LE",
  },
  {
    building: "Lanark House",
    acronym: "LH",
  },
  {
    building: "Lennox and Addington House",
    acronym: "LX",
  },
  {
    building: "Maintenance Building",
    acronym: "MB",
  },
  {
    building: "Minto Centre",
    acronym: "MC",
  },
  {
    building: "Mackenzie Building",
    acronym: "ME",
  },
  {
    building: "MacOdrum Library",
    acronym: "ML",
  },
  {
    building: "Nesbitt Biology Building",
    acronym: "NB",
  },
  {
    building: "Nicol Building",
    acronym: "NI",
  },
  {
    building: "National Wildlife Research Centre",
    acronym: "NW",
  },
  {
    building: "Paterson Hall",
    acronym: "PA",
  },
  {
    building: "Parking Garages",
    acronym: "PG",
  },
  {
    building: "Prescott House",
    acronym: "PH",
  },
  {
    building: "Richcraft Hall",
    acronym: "RB",
  },
  {
    building: "Renfrew House",
    acronym: "RH",
  },
  {
    building: "Robertson Hall",
    acronym: "RO",
  },
  {
    building: "Russell House",
    acronym: "RU",
  },
  {
    building: "Southam Hall",
    acronym: "SA",
  },
  {
    building: "Steacie Building",
    acronym: "SC",
  },
  {
    building: "Stormont House",
    acronym: "SH",
  },
  {
    building: "St. Patrick's Building",
    acronym: "SP",
  },
  {
    building: "Social Sciences Research Building",
    acronym: "SR",
  },
  {
    building: "Tory Building",
    acronym: "TB",
  },
  {
    building: "Tennis Centre",
    acronym: "TC",
  },
  {
    building: "Carleton Technology and Training Centre",
    acronym: "TT",
  },
  {
    building: "University Centre",
    acronym: "UC",
  },
  {
    building: "Visualization and Simulation Building",
    acronym: "VS",
  },
];

var question = "";
var question_text = "";
var index = -1;
var guesses = 0;
var correct = 0;
var clicks = 0;
var percentage = 0;

var game_buildings = buildings;

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
  let endscreen = document.getElementById("end-screen");
  endscreen.style.visibility = "hidden";
  let game_board = document.getElementById("game-board");
  for (let i = 0; i < buildings.length; i++) {
    let btn = document.createElement("button");
    btn.setAttribute("id", buildings[i].acronym);
    btn.classList.add("game-button");
    let text = document.createTextNode("◯");
    btn.appendChild(text);
    btn.onclick = function () {
      guess(buildings[i].acronym);
    };
    game_board.appendChild(btn);
  }
}

function roll() {
  let clickon = document.getElementById("click-on");

  index++;

  if (index == game_buildings.length) {
    console.log("endscreen");
    endScreen();
  } else {
    question = game_buildings[index].acronym;
    question_text =
      game_buildings[index].building +
      " (" +
      game_buildings[index].acronym +
      ")";
    console.log("click on " + question_text);
  }
  clickon.textContent = "Click on " + question_text;
}

function guess(guessed_location) {
  let btn = document.getElementById(question);
  let percentTxt = document.getElementById("percentage");
  let circle = document.getElementById("circle");
  console.log("this is " + guessed_location);
  clicks++;
  if (question == guessed_location) {
    correct++;
    console.log("yes!!");
    switch (guesses) {
      case 0:
        btn.style.background = "#00ff00";
        break;
      case 1:
        btn.style.background = "#f6d32d";
        break;
      case 2:
        btn.style.background = "#ff9933";
        break;
      default:
        circle.style.visibility = "hidden";
        btn.style.background = "#fc0303";
        break;
    }
   
    btn.innerText = question;
    guesses = 0;
    roll();
  } else {
    console.log("no :(((");
    guesses++;
    if (guesses >= 3) {
      console.log("even after 3 attps you got wrong");
      console.log(btn.offsetLeft + "," + btn.offsetTop);
      circle.style.left = btn.offsetLeft-15+"px";
      circle.style.top = btn.offsetTop-15+"px";
      circle.style.visibility = "visible";
    }
  }
  percentage = Math.floor((correct / clicks) * 100);
  percentTxt.innerText = percentage + "%";
  console.log(percentage);
}

function endScreen() {
  let endscreen = document.getElementById("end-screen");
  let percentTxt = document.getElementById("end-percentage");
  endscreen.style.visibility = "visible";
  percentTxt.innerText = percentage + "%";
}
