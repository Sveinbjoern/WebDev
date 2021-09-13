/*
    helperfunctions.js contains a bunch of functions
	that are needed site wide.

	functions for drawing tabs: drawTabs() and drawTab()
	function for creating elements from templates: 
	createHandlebarElements()

	function for removeing all children of an element:
	removeChildren()

	Has the fitToScreen function that deals with change in
	screen size for the #p5canvas fields 
	
	also creates the tabVal variable that is needed for two
	the pages.

	


*/

let tabVal = null;

function drawTabs() {
  strokeWeight(3);
  stroke(colors.black);
  for (let i = 0; i < tabVal.amount; i++) {
    drawTab(tabVal.tabStarts[i], tabVal.tabColor[i % 3], i);
  }

  let tabHeight = tabVal.tabBottom - 1;
  line(0, tabHeight, tabVal.tabStarts[tabVal.currentTab], tabHeight);
  line(
    tabVal.tabStarts[tabVal.currentTab] + tabVal.tabWidth,
    tabHeight,
    width,
    tabHeight
  );

  noStroke();
  fill(tabVal.tabColor[tabVal.currentTab % 3]);
  rect(0, tabVal.tabBottom, width, tabVal.tabBottom);
}

function drawTab(startingX, color, textIndex) {
  fill(color);
  beginShape();
  vertex(startingX, tabVal.tabBottom);
  vertex(startingX + tabVal.tabNarrow, tabVal.tabHeight);
  vertex(startingX + tabVal.tabWidth - tabVal.tabNarrow, tabVal.tabHeight);
  vertex(startingX + tabVal.tabWidth, tabVal.tabBottom);
  endShape();
  textSize(tabVal.fontSize);
  textAlign(CENTER, CENTER);

  if (document.getElementById("languageEN").checked) {
    text(
      tabVal.tabTextEN[textIndex],
      startingX + tabVal.tabNarrow + tabVal.distance / 4,
      tabVal.tabBottom - (tabVal.tabBottom - tabVal.tabHeight) / 2
    );
  } else {
    text(
      tabVal.tabTextNo[textIndex],
      startingX + tabVal.tabNarrow + tabVal.distance / 4,
      tabVal.tabBottom - (tabVal.tabBottom - tabVal.tabHeight) / 2
    );
  }
}

function createHandlebarElements(objectArray) {
  let elem = document.getElementById("gridArea");

  let object = $(gridDisplayTemplate(myDatabase.getSamlingObject(objectArray)));

  let length = object.length;
  for (let i = 0; i < length; i += 2) {
    elem.append(object[i]);
  }
}

function removeChildren(elem) {
  console.log(elem);
  while (elem.firstChild) {
    elem.removeChild(elem.lastChild);
  }
}

function fitToScreen() {
  console.log("fitToScreen");

  canvasContainer = select("#p5canvas");
  var c = createCanvas(
    canvasContainer.size().width,
    canvasContainer.size().height
  );
  c.parent("p5canvas");
  update = true;
}
