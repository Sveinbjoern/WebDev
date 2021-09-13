//global variables that will store the toolbox colour palette
//amnd the helper functions

let update = false;
let logoFont = null;
let colorFieldValues = {
	leftX: 0,
	topY: 0,
	middleX: 0,
	middleY: 0,
	circleR: 0,
	textSize:0,

	middleXMinus:0,
	middleXPlus:0,
	middleYMinus:0,
	middleYPlus:0,
	
	
	
	

	update: function () {
		this.middleX = width /2;
		this.middleY = height/2;
		this.circleR = this.middleX/4;
		this.textSize = width/20 

		this.middleXMinus = width/4;
		this.middleXPlus = width /1.5;
		this.middleYMinus = height/4;
		this.middleYPlus = height/1.5
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
	logoFont = loadFont( "assets\\fonts\\WindSong-Regular.ttf", () => {console.log("success")}, () => {console.log("fail")})

}


function setup() {
	
	// console.log("setup")
	setAttributes('antialias', true)
	//basic p5 settings:
	frameRate(24);
	noStroke();
	ellipseMode(CENTER);
	rectMode(CORNER);
	
	textAlign(CENTER,CENTER)

	//create a canvas to fill the content div from index.html
	fitToScreen();

	colors.setup();
	
	colorFieldValues.update();
	
	

	//create eventlistener that saves the language choice to localStorage
	let elem = document.getElementById("languageEN")
	elem.addEventListener('change', () => {
		// console.log("eventlister working", elem.checked,JSON.stringify(elem.checked))
		window.localStorage.setItem("EnglishLangueSelected", JSON.stringify(elem.checked))
		update = true;
	  });

	//load from localStorge your language settings
	let set = window.localStorage.getItem("EnglishLangueSelected")
	// console.log(set)
  	if (set != undefined)
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


	drawCircle()
}



function keyPressed(){
	if (keyCode = keyCodes.R)
	{
	
		// });
	}
}

function mousePressed(){

	if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height)
	{
		console.log("in the field")


		if (dist(mouseX, mouseY, colorFieldValues.middleX, colorFieldValues.middleY)< colorFieldValues.circleR )
		{
			console.log("in the circle")
			window.location.href = "index.html";
		} else if (mouseX <= colorFieldValues.middleX && mouseY <= colorFieldValues.middleY)
		{
			console.log("upper left")
			window.location.href = "samling.html";
		}else if (mouseX > colorFieldValues.middleX && mouseY <= colorFieldValues.middleY)
		{
			window.location.href = "blogg.html";
		}else if (mouseX <= colorFieldValues.middleX && mouseY > colorFieldValues.middleY)
		{
			window.location.href = "butikk.html";
		} else {
			window.location.href = "omOss.html";
		}
	}
}



function drawColorField(){
	textFont("ariel")
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
	// fill(colors.white)
	// textSize(colorFieldValues.textSize/4)
	// text("Find out more about us", colorFieldValues.middleXPlus, colorFieldValues.middleYPlus)

}
function drawCircle(){
	

	fill(colors.white);
	ellipse(colorFieldValues.middleX, colorFieldValues.middleY, colorFieldValues.circleR*2);
	fill("black")
	textFont(logoFont);
	textSize(colorFieldValues.textSize );
	text("Team Eir", colorFieldValues.middleX,colorFieldValues.middleY)

}