//global variables that will store the toolbox colour palette
//amnd the helper functions


let currentTab = 0


let update = false;
let tabVal = {
	tabBottom: -10, //set in setup
	tabHeight: -50, //set in setup
	tabWidth: 220,
	tabNarrow: 30,

	start: 100,
	distance: 20, //set in setup

	tabText: {
		hoved: "Hoved",
		skapelse: "Skapelse",
		blogg: "Inspirasjons-Blogg",
	},

	tabColor: [], //set in setup
	tabStarts: [],//set in setup


} 

let colors = {}; // made in setup


const soundeffects = {};


function preload() {


}


function setup() {
	
	console.log("setup")
	setAttributes('antialias', true)
	//basic p5 settings:
	frameRate(30);

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#p5canvas');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent('p5canvas');

	colors.blue = "#5139e4"
	colors.indigo = "#4b0082"
	colors.satinSheenGold = "#ad9223";
	colors.black = "#0b090A"
	colors.white = "#e3ddde"
	background(255);
	
	
	tabVal.tabBottom += height;
	tabVal.tabHeight = tabVal.tabHeight + tabVal.tabBottom;
	tabVal.distance += tabVal.tabWidth;


	tabVal.tabColor = [colors.indigo, colors.satinSheenGold, colors.blue]

	tabVal.tabStarts = [tabVal.start, tabVal.start + tabVal.distance,tabVal.start + tabVal.distance*2 ]
	//create the drawManager
	drawTabs();

}

function draw() {
	// console.log("draw ")
	
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user

	if (update)
	{
		drawTabs();
		update = false;
	}
}


function fitToScreen(){
 console.log("fitToScreen");
 
 
 canvasContainer = select('#p5canvas');
 var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
 c.parent('p5canvas');
 
}

function drawTabs(){
	strokeWeight(3);
	stroke(colors.black)
	drawTab(tabVal.tabStarts[0], tabVal.tabColor[0]);
	drawTab(tabVal.tabStarts[1], tabVal.tabColor[1]);
	drawTab(tabVal.tabStarts[2], tabVal.tabColor[2]);
	
	let tabHeight = tabVal.tabBottom -1;
	line(0,tabHeight, tabVal.tabStarts[currentTab], tabHeight);
	line(tabVal.tabStarts[currentTab]+ tabVal.tabWidth, tabHeight, width, tabHeight);

	
	noStroke();
	fill(tabVal.tabColor[currentTab])
	rect(0,tabVal.tabBottom , width, tabVal.tabBottom)
}

function drawTab(startingX, color){
	fill(color);
	beginShape();
	vertex(startingX, tabVal.tabBottom)
	vertex(startingX + tabVal.tabNarrow, tabVal.tabHeight)
	vertex(startingX + tabVal.tabWidth - tabVal.tabNarrow, tabVal.tabHeight)
	vertex(startingX + tabVal.tabWidth, tabVal.tabBottom)
	endShape(); 
	// console.log("logging drawTab", startingX, tabVal.tabBottom, tabVal.tabHeight )
}


function mousePressed(){
	// soundeffects.ding.play();
	// drawManager.reset();

	if (mouseY > tabVal.tabHeight && mouseY < tabVal.tabBottom)
	{
		console.log("correct height")
		if (mouseX > tabVal.tabStarts[0]+ tabVal.tabNarrow && mouseX < tabVal.tabStarts[0] + tabVal.tabWidth - tabVal.tabNarrow)
		{
			currentTab = 0;
			update = true;
		} else if (mouseX > tabVal.tabStarts[1]+ tabVal.tabNarrow && mouseX < tabVal.tabStarts[1] + tabVal.tabWidth - tabVal.tabNarrow)
		{
			currentTab = 1;
			update = true;
		} else if (mouseX > tabVal.tabStarts[2]+ tabVal.tabNarrow && mouseX < tabVal.tabStarts[2] + tabVal.tabWidth - tabVal.tabNarrow)
		{
			currentTab = 2;
			update = true;
		}
	}

	console.log("mousePressed?   ")
}