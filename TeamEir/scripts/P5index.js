/*
		P5index.js contains the javascript
		unique to index.html 
*/

let update = false;
let logoFont = null;

// colorFieldValues defines all the neccessary calculations for the #P5Canvas field
let colorFieldValues = {
  leftX: 0,
  topY: 0,
  middleX: 0,
  middleY: 0,
  circleR: 0,
  textSize: 0,

  middleXMinus: 0,
  middleXPlus: 0,
  middleYMinus: 0,
  middleYPlus: 0,

  update: function () {
    this.middleX = width / 2;
    this.middleY = height / 2;
    this.circleR = this.middleX / 4;
    this.textSize = width / 20;

    this.middleXMinus = width / 4;
    this.middleXPlus = width / 1.5;
    this.middleYMinus = height / 4;
    this.middleYPlus = height / 1.5;
  },
};

// colors contains all the colors for the #p5Canvas html element

let colors = {
  setup: function () {
    colors.blue = "#5139e4";
    colors.indigo = "#4b0082";
    colors.satinSheenGold = "#ad9223";
    colors.black = "#0b090A";
    colors.white = "#e3ddde";
  },
};

function preload() {
  logoFont = loadFont("assets\\fonts\\WindSong-Regular.ttf");
}

function setup() {
  //basic p5 settings:
  setAttributes("antialias", true);
  frameRate(24);
  noStroke();
  ellipseMode(CENTER);
  rectMode(CORNER);
  textAlign(CENTER, CENTER);

  //make the canvas fill the entire content div
  fitToScreen();

  //local setup
  colors.setup();

  colorFieldValues.update();

  //create eventlistener that saves the language choice to localStorage
  let elem = document.getElementById("languageEN");
  elem.addEventListener("change", () => {
    window.localStorage.setItem(
      "EnglishLangueSelected",
      JSON.stringify(elem.checked)
    );
    update = true;
  });

  //load from localStorge your language settings if defined
  let set = window.localStorage.getItem("EnglishLangueSelected");

  if (set != undefined && set != "undefined") {
    elem.checked = JSON.parse(set);
  }
}
//draw runs every frame
function draw() {
  if (update) {
    colorFieldValues.update();
    update = false;
  }
  drawColorField();

  drawCircle();
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    if (
      dist(mouseX, mouseY, colorFieldValues.middleX, colorFieldValues.middleY) <
      colorFieldValues.circleR
    ) {
      window.location.href = "index.html";
    } else if (
      mouseX <= colorFieldValues.middleX &&
      mouseY <= colorFieldValues.middleY
    ) {
      window.location.href = "samling.html";
    } else if (
      mouseX > colorFieldValues.middleX &&
      mouseY <= colorFieldValues.middleY
    ) {
      window.location.href = "blogg.html";
    } else if (
      mouseX <= colorFieldValues.middleX &&
      mouseY > colorFieldValues.middleY
    ) {
      window.location.href = "butikk.html";
    } else {
      window.location.href = "omOss.html";
    }
  }
}

//draws colorfield in #p5Canvas
function drawColorField() {
  fill(colors.indigo);
  rect(
    colorFieldValues.leftX,
    colorFieldValues.middleY,
    colorFieldValues.middleX,
    colorFieldValues.middleY
  );
  fill(colors.satinSheenGold);
  rect(
    colorFieldValues.middleX,
    colorFieldValues.topY,
    colorFieldValues.middleX,
    colorFieldValues.middleY
  );
  fill(colors.blue);
  rect(
    colorFieldValues.leftX,
    colorFieldValues.topY,
    colorFieldValues.middleX,
    colorFieldValues.middleY
  );

  fill(colors.black);
  rect(
    colorFieldValues.middleX,
    colorFieldValues.middleY,
    colorFieldValues.middleX,
    colorFieldValues.middleY
  );
}

//draws the circle and the text
function drawCircle() {
  fill(colors.white);
  ellipse(
    colorFieldValues.middleX,
    colorFieldValues.middleY,
    colorFieldValues.circleR * 2
  );
  fill("black");
  textFont(logoFont);
  textSize(colorFieldValues.textSize);
  text("Team Eir", colorFieldValues.middleX, colorFieldValues.middleY);
}
