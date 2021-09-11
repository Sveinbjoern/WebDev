//global variables that will store the toolbox colour palette
//amnd the helper functions


let currentTab = 0;

let keyCodes = {
	R: 82,
}

let update = false;
let tabVal = {
	amount: 4,

	tabBottomBase: -5,
	tabBottom: 0, //set in setup
	tabHeightBase: -50,
	tabHeight: 0, //set in setup
	tabWidth: 220,
	tabNarrow: 30,
	

	start: 100,
	distanceBase: 20,
	distance: 0, //set in setup

	tabText: {
		hoved: "Hoved",
		skapelse: "Skapelse",
		blogg: "Inspirasjons-Blogg",
	},

	tabColor: [], //set in setup
	tabStarts: [],//set in setup

	setup: function (){
		this.tabBottom = height + this.tabBottomBase;
		this.tabHeight = this.tabHeightBase + this.tabBottom;
		this.distance = this.tabWidth + this.distanceBase;
		this.tabColor = [colors.blue, colors.indigo, colors.satinSheenGold ];
		for (let i = 0; i < this.amount; i++)
		{
			this.tabStarts.push(this.start + this.distance * i);
		}
		
	}

} 

let colors = {

	setup: function(){
		colors.blue = "#5139e4"
		colors.indigo = "#4b0082"
		colors.satinSheenGold = "#ad9223";
		colors.black = "#0b090A"
		colors.white = "#e3ddde"
	}

	
}; // made in setup


const soundeffects = {};


function preload() {


}


function setup() {
	
	console.log("setup")
	setAttributes('antialias', true)
	//basic p5 settings:
	frameRate(25);

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#p5canvas');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent('p5canvas');

	
	// background(255);
	
	colors.setup()
	
	tabVal.setup();

	
	//create the drawManager
	drawTabs();

	gridDisplayTemplate = Handlebars.compile(gridDisplayTemplate);
	
	
	  let elem = document.getElementById("gridArea")
	//   elem.append($(gridDisplayTemplate({
	// 	object: [
	// 	  {
	// 		name:'"Yehuda Katz"',
	// 		image: `assets/img/1.fargeoversiktRmotRo.jpg`,
	// 		flavourText: '"ERFGSDGHSHFASDFGD"',
	// 		  }
		  
		 
	// 	], 
		 
	//   }) )[0] )

	  console.log($(gridDisplayTemplate(myDatabase.getSamlingObject([0])))[2])
	  elem.append($(gridDisplayTemplate(myDatabase.getSamlingObject([0])))[0])
	  elem.append($(gridDisplayTemplate(myDatabase.getSamlingObject([0])))[2])


	



}

function draw() {

	if (update)
	{
		drawTabs();
		update = false;
	}
}






function keyPressed(){
	if (keyCode === keyCodes.R)
	{
		// console.log("keycode R")
		// let elem = document.getElementById("languageEN")
		// // console.log(elem.checked)
		// elem.checked = !elem.checked;
		// // console.log(elem.value)

		let next = false;
		let changed = false;
		elem = document.getElementById("cat_type_all")
		// console.log(elem.checked)
		if (elem.checked) {next = true}
		elem = document.getElementById("cat_type_tegneserie")
		if (next)
		{
			currentTab = 1;
			update = true;
			elem.checked = true;
			changed = true;
			next = false;
			console.log(elem)
			
		} else if(elem.checked) {next = true}

		elem = document.getElementById("cat_type_husflid")
		if (next)
		{
			currentTab =2;
			update = true;
			elem.checked = true;
			changed = true
			next = false
			console.log(elem)
		} else if(elem.checked) {next = true}
		elem = document.getElementById("cat_type_utfoldelse")
		if (next)
		{
			currentTab = 3;
			update = true;
			elem.checked = true;
			changed = true
			next =false
			console.log(elem)
		} else if(elem.checked) {next = true}

		if (next || !changed)
		{
			currentTab = 0;
			update = true;
			elem = document.getElementById("cat_type_all")
			elem.checked = true;
			console.log(elem)

		}

		elem = document.getElementById("gridArea")
		removeChildren(elem)

	
		// elem = document.getElementsByClassName("English")

		// elem.forEach(element => {
		// 	element.style.display = "flex";
		// });
	}
}

function mousePressed(){
	// soundeffects.ding.play();
	// drawManager.reset();
	
	if (mouseY > tabVal.tabHeight && mouseY < tabVal.tabBottom)
	{
		// console.log("correct height")
		if (mouseX > tabVal.tabStarts[0]+ tabVal.tabNarrow && mouseX < tabVal.tabStarts[0] + tabVal.tabWidth - tabVal.tabNarrow)
		{
			currentTab = 0;
			let elem = document.getElementById("cat_type_all");
			elem.checked = true;
			update = true;
		} else if (mouseX > tabVal.tabStarts[1]+ tabVal.tabNarrow && mouseX < tabVal.tabStarts[1] + tabVal.tabWidth - tabVal.tabNarrow)
		{
			currentTab = 1;
			let elem = document.getElementById("cat_type_tegneserie");
			elem.checked = true;
			update = true;
		} else if (mouseX > tabVal.tabStarts[2]+ tabVal.tabNarrow && mouseX < tabVal.tabStarts[2] + tabVal.tabWidth - tabVal.tabNarrow)
		{
			currentTab = 2;
			let elem = document.getElementById("cat_type_husflid");
			elem.checked = true;
			update = true;
		} else if (mouseX > tabVal.tabStarts[3]+ tabVal.tabNarrow && mouseX < tabVal.tabStarts[3] + tabVal.tabWidth - tabVal.tabNarrow)
		{
			currentTab = 3;
			let elem = document.getElementById("cat_type_utfoldelse");
			elem.checked = true;
			update = true;
		}
	}

	console.log("mousePressed?   ")
}