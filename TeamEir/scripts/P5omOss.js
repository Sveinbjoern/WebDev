/*
	p5omOss.js contain the javascript specific to omOss.html

*/

let update = false;

//color.setup is run in p5.setup
let colors = {
  setup: function () {
    colors.blue = "#a79de4";
    colors.indigo = "#735b83";
    colors.satinSheenGold = "#b3a676";
    colors.black = "#0b090A";
    colors.white = "#e3ddde";
  },
};

function preload() {}

function setup() {
  console.log("setup");
  setAttributes("antialias", true);
  //basic p5 settings:
  frameRate(25);
  textAlign(CENTER, CENTER);

  //create a canvas to fill the content div from index.html

  fitToScreen();

  // background(255);

  colors.setup();

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
}

function draw() {
  if (update) {
    update = false;
  }
}
