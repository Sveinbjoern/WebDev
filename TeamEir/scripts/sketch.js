//global variables that will store the toolbox colour palette
//amnd the helper functions
let toolbox = null;
let colourP = null;
let helpers = null;
let drawManager = null;
let sliderManager = null;

let currentFigureIndex = 0;
let currentDrawingIndex = 0;
let currentPartIndex = 0;
let currentFigure;
let currentDrawing;
let currentPart;


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
	
	
	

	function sumOfArray(array, l, R) {
		// console.log("l,r",l,R)
		// console.log("array[l],array[r]",array[l],array[R])
		if (l > R) {
				return 0;
			} else if (l == R) {
				// console.log("elseStatement")
				return array[l];
			}  
		
			var middle =	Math.floor((l+R)/2);
			// console.log("lmr",l,parseInt(middle),R)
			var sumL = sumOfArray(array,l, middle);
			var sumR = sumOfArray(array,middle+1, R);
			return sumL + sumR;
		}


		function sumOfNumbers(n) {
			// console.log("sumOfNumbers running")
		if (n == 0) {
		return 0;
		} for (let i =1; i<= n; i++){
			array.push(i);
		} 
		// console.log("array before addition",array)
		return sumOfArray(array, 0, n-1);
		}

		let array = []
	console.log(2,sumOfNumbers(2));
	array = []
	console.log(3,sumOfNumbers(3));
	array = []
	console.log(4,sumOfNumbers(4));
	array = []
	console.log(5,sumOfNumbers(5));
	array = []
	console.log(6,sumOfNumbers(6));
	array = []
	console.log(7,sumOfNumbers(7));
	array = []
	console.log(8,sumOfNumbers(8));
	array = []
	console.log(9,sumOfNumbers(9));
	array = []
	console.log(10,sumOfNumbers(10));
	array = []
	console.log(11,sumOfNumbers(11));
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
 drawManager.reset();
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