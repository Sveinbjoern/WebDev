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
	tabHeightBase: -40,
	tabHeight: 0, //set in setup
	tabWidthBase: 70,
	tabWidth: 0,
	tabNarrow: 30,
	
	fontSize: 0,

	start: 0,
	distanceBase: 20,
	distance: 0, //set in setup

	tabTextNo: [
		"Samling",
		"Tegneserie",
		"Inspirasjons-Blogg",
		"Utfoldelse"
		
	],
	tabTextEN: [
		"Collection",
		"Cartoons",
		"Inspiration Blog",
		"Abstract"
	],

	tabColor: [], //set in setup
	tabStarts: [],//set in setup

	setup: function (){

		this.tabWidth =  this.tabWidthBase + width/10;
		this.distance = this.tabWidth + this.distanceBase;
		this.start = this.distance/12;
		this.fontSize = this.tabWidth/10

		this.tabBottom = height + this.tabBottomBase;
		this.tabHeight = this.tabHeightBase + this.tabBottom;
		
		this.tabColor = [colors.blue, colors.indigo, colors.satinSheenGold ];
		for (let i = 0; i < this.amount; i++)
		{
			this.tabStarts.push(this.start + this.distance * i);
		}
		
	},
	calculateWidth: function() {
		this.tabWidth =  this.tabWidthBase + width/10;
		this.distance = this.tabWidth + this.distanceBase;
		this.start = this.distance/12;
		this.fontSize = this.tabWidth/10;
		this.tabStarts = [];
		for (let i = 0; i < this.amount; i++)
		{
			this.tabStarts.push(this.start + this.distance * i);
		}
	},
} 

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


const soundeffects = {};


function preload() {


}


function setup() {
	
	console.log("setup")
	setAttributes('antialias', true)
	//basic p5 settings:
	frameRate(25);
	textAlign(CENTER,CENTER);

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
	
	
	  
	//   elem.append($(gridDisplayTemplate({
	// 	object: [
	// 	  {
	// 		name:'"Yehuda Katz"',
	// 		image: `assets/img/1.fargeoversiktRmotRo.jpg`,
	// 		flavourText: '"ERFGSDGHSHFASDFGD"',
	// 		  }
		  
		 
	// 	], 
	createHandlebarElements([{type: "tegneserie", indices: [0,1,2,3,4,5,6,7,8,9,10,11,12]},{type: "utfoldelse", indices: [0,1,2,3,4,5,6,7]}, {type: "husflid", indices: [0,1,2,3]}])
		 
	 

	



}

function draw() {

	if (update)
	{
		tabVal.calculateWidth();
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
			
			removeChildren(document.getElementById("gridArea"));
			createHandlebarElements([{type: "tegneserie", indices: [0,1,2,3,4,5,6,7,8,9,10,11,12]},{type: "utfoldelse", indices: [0,1,2,3,4,5,6,7]}, {type: "husflid", indices: [0,1,2,3]}]);
			update = true;
		} else if (mouseX > tabVal.tabStarts[1]+ tabVal.tabNarrow && mouseX < tabVal.tabStarts[1] + tabVal.tabWidth - tabVal.tabNarrow)
		{
			currentTab = 1;
			let elem = document.getElementById("cat_type_tegneserie");
			elem.checked = true;
			removeChildren(document.getElementById("gridArea"));
			createHandlebarElements([{type: "tegneserie", indices: [0,1,2,3,4,5,6,7,8,9,10,11,12]}]);
			update = true;
		} else if (mouseX > tabVal.tabStarts[2]+ tabVal.tabNarrow && mouseX < tabVal.tabStarts[2] + tabVal.tabWidth - tabVal.tabNarrow)
		{
			currentTab = 2;
			let elem = document.getElementById("cat_type_husflid");
			elem.checked = true;
			removeChildren(document.getElementById("gridArea"));
			createHandlebarElements([{type: "husflid", indices: [0,1,2,3]}]);
			update = true;
		} else if (mouseX > tabVal.tabStarts[3]+ tabVal.tabNarrow && mouseX < tabVal.tabStarts[3] + tabVal.tabWidth - tabVal.tabNarrow)
		{
			currentTab = 3;
			let elem = document.getElementById("cat_type_utfoldelse");
			elem.checked = true;
			removeChildren(document.getElementById("gridArea"));
			createHandlebarElements([{type: "utfoldelse", indices: [0,1,2,3,4,5,6,7]}]);
			update = true;
		}
	}

	console.log("mousePressed?   ")
}