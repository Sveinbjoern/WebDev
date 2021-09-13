//global variables that will store the toolbox colour palette
//amnd the helper functions






let update = false;


//color.setup is run in p5.setup
let colors = {

	setup: function(){
		colors.blue = "#a79de4";//"#5139e4"
		colors.indigo = "#735b83";//"#4b0082"
		colors.satinSheenGold = "#b3a676";//"#ad9223"
		colors.black = "#0b090A"
		colors.white = "#e3ddde"
	}

	
};	



function preload() {


}


function setup() {
	
	console.log("setup")
	setAttributes('antialias', true)
	//basic p5 settings:
	frameRate(25);
	textAlign(CENTER,CENTER);

	//create a canvas to fill the content div from index.html
	
	fitToScreen();
	
	// background(255);
	
	colors.setup()
	

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

	if (update)
	{
		
		update = false;
	}
}






function keyPressed(){
	if (keyCode === keyCodes.R)
	{
		
	}
}

function mousePressed(){
	
	
}