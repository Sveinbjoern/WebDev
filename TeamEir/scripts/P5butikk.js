/*
	p5butikk.js contain the javascript specific to butikk.html

*/

let update = false;
tabVal = {
  amount: 2,
  currentTab: 0,

  tabBottomBase: -5,
  tabBottom: 0, //set in setup
  tabHeightBase: -40,
  tabHeight: 0, //set in setup
  tabWidthBase: 70,
  tabWidth: 0,
  tabNarrow: 30,

  fontSize: 0,

  start: 0,
  distanceBase: 20,
  distance: 0, //set in setup

  tabTextNo: ["Kurs", "Varer"],
  tabTextEN: ["Courses", "Goods"],

  tabColor: [], //set in setup
  tabStarts: [], //set in setup

  setup: function () {
    this.tabWidth = this.tabWidthBase + width / 10;
    this.distance = this.tabWidth + this.distanceBase;
    this.start = this.distance / 12;
    this.fontSize = this.tabWidth / 12;

    this.tabBottom = height + this.tabBottomBase;
    this.tabHeight = this.tabHeightBase + this.tabBottom;

    this.tabColor = [colors.blue, colors.indigo, colors.satinSheenGold];
    for (let i = 0; i < this.amount; i++) {
      this.tabStarts.push(this.start + this.distance * i);
    }
  },
  calculateWidth: function () {
    this.tabWidth = this.tabWidthBase + width / 10;
    this.distance = this.tabWidth + this.distanceBase;
    this.start = this.distance / 12;
    this.fontSize = this.tabWidth / 12;
    this.tabStarts = [];
    for (let i = 0; i < this.amount; i++) {
      this.tabStarts.push(this.start + this.distance * i);
    }
  },
};

//color.setup is run in p5.setup
let colors = {
  setup: function () {
    colors.blue = "#a79de4"; //"#5139e4"
    colors.indigo = "#735b83"; //"#4b0082"
    colors.satinSheenGold = "#b3a676"; //"#ad9223"
    colors.black = "#0b090A";
    colors.white = "#e3ddde";
  },
};

function preload() {}

function setup() {
  //basic p5 settings:
  setAttributes("antialias", true);
  frameRate(25);
  textAlign(CENTER, CENTER);

  //create eventlistener that saves the language choice to localStorage
  let elem = document.getElementById("languageEN");
  elem.addEventListener("change", () => {
    window.localStorage.setItem(
      "EnglishLangueSelected",
      JSON.stringify(elem.checked)
    );
    update = true;
  });

  //load from localStorge your language settings
  let set = window.localStorage.getItem("EnglishLangueSelected");

  if (set != undefined && set != "undefined") {
    elem.checked = JSON.parse(set);
  }

  fitToScreen();

  colors.setup();
  tabVal.setup();

  // create the tabs for changing category
  drawTabs();
}

function draw() {
  if (update) {
    tabVal.calculateWidth();
    drawTabs();
    update = false;
  }
}

function mousePressed() {
  if (mouseY > tabVal.tabHeight && mouseY < tabVal.tabBottom) {
    if (
      mouseX > tabVal.tabStarts[0] + tabVal.tabNarrow &&
      mouseX < tabVal.tabStarts[0] + tabVal.tabWidth - tabVal.tabNarrow
    ) {
      tabVal.currentTab = 0;
      let elem = document.getElementById("cat_kurs");
      elem.checked = true;

      fitToScreen();

      update = true;
    } else if (
      mouseX > tabVal.tabStarts[1] + tabVal.tabNarrow &&
      mouseX < tabVal.tabStarts[1] + tabVal.tabWidth - tabVal.tabNarrow
    ) {
      tabVal.currentTab = 1;
      let elem = document.getElementById("cat_varer");

      elem.checked = true;

      fitToScreen();
      update = true;
    }
  }
}
