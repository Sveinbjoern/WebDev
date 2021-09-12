//global variables that will store the toolbox colour palette
//amnd the helper functions

let update = false;
let colorFieldValues = {
	leftX: 0,
	topY: 0,
	middleX: 0,
	middleY: 0,
	circleR: 0,

	update: function () {
		this.middleX = width /2;
		this.middleY = height/2;
		this.circleR = this.middleX/2;
	},
	
}

let colors = {

	setup: function(){
		colors.blue = '#5139e4';//"#a79de4"
		colors.indigo = '#4b0082';//"#735b83"
		colors.satinSheenGold = '#ad9223';//"#b3a676"
		colors.black = '#0b090A';
		colors.white = '#e3ddde';
	}

	
};	


// colors.blue = "#5139e4"
// 	colors.indigo = "#4b0082"
// 	colors.satinSheenGold = "#ad9223";
// 	colors.black = "#0b090A"
// 	colors.white = "#e3ddde"
function preload() {


}


function setup() {
	
	// console.log("setup")
	setAttributes('antialias', true)
	//basic p5 settings:
	frameRate(30);
	noStroke();
	ellipseMode(CENTER);
	rectMode(CORNER);

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#p5canvas');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent('p5canvas');

	colors.setup();
	
	colorFieldValues.update();
	
	

	//create eventlistener that saves the language choice to localStorage
	let elem = document.getElementById("languageEN")
	elem.addEventListener('change', () => {
		// console.log("eventlister working", elem.checked,JSON.stringify(elem.checked))
		window.localStorage.setItem("English", JSON.stringify(elem.checked))
		update = true;
	  });

	//load from localStorge your language settings
	let set = window.localStorage.getItem("English")
	// console.log(set)
  	if (set)
	{
		
	  elem.checked = JSON.parse(set);

	} 
	

}

function draw() {
	// console.log("draw ")
	
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	
	

	if (update)
		{
			colorFieldValues.update();
			update = false;
		}
	drawColorField();
	
}



function keyPressed(){
	if (keyCode = keyCodes.R)
	{
	
		// });
	}
}

function mousePressed(){

}



function drawColorField(){
	// console.log("drawColorField")
	// console.log(color(colors.indigo))
	fill(colors.indigo);
	rect(colorFieldValues.leftX,colorFieldValues.middleY, colorFieldValues.middleX, colorFieldValues.middleY);
	fill(colors.satinSheenGold);
	rect(colorFieldValues.middleX,colorFieldValues.topY, colorFieldValues.middleX, colorFieldValues.middleY);
	fill(colors.blue);
	rect(colorFieldValues.leftX,colorFieldValues.topY, colorFieldValues.middleX, colorFieldValues.middleY);
	fill(colors.black);
	rect(colorFieldValues.middleX,colorFieldValues.middleY, colorFieldValues.middleX, colorFieldValues.middleY);

	fill(colors.white);
	ellipse(colorFieldValues.middleX, colorFieldValues.middleY, colorFieldValues.circleR);

}