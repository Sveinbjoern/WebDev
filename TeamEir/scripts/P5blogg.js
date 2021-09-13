/*

	p5blogg.js contain the javascript specific to blogg.html



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

  let set = window.localStorage.getItem("EnglishLangueSelected");

  if (set != undefined && set != "undefined") {
    elem.checked = JSON.parse(set);
  }

  //make the canvas fill the entire content div
  fitToScreen();

  // local setup
  colors.setup();

  //handlebars handling. Filling the templates in the page.
  gridBlogTemplate = Handlebars.compile(gridBlogTemplate);
  console.log(gridBlogTemplate);

  elem = document.getElementById("gridArea");
  let object = $(gridBlogTemplate(myDatabase.getBlogObject()));

  let length = object.length;
  for (let i = 0; i < length; i += 2) {
    elem.append(object[i]);
  }
}

function draw() {
  if (update) {
    update = false;
  }
}
