//global variables that will store the toolbox colour palette
//amnd the helper functions


let currentTab = 0;

let keyCodes = {
	R: 82,
}

let update = false;
let tabVal = {
	amount: 4,

	tabBottom: -5, //set in setup
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

	setup: function (){
		tabVal.tabBottom += height;
		tabVal.tabHeight = tabVal.tabHeight + tabVal.tabBottom;
		tabVal.distance += tabVal.tabWidth;
		tabVal.tabColor = [colors.blue, colors.indigo, colors.satinSheenGold ];
		for (let i = 0; i < tabVal.amount; i++)
		{
			tabVal.tabStarts.push(tabVal.start + tabVal.distance * i);
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
	
	var template = Handlebars.compile(`Handlebars
	 <b>{{doesWhat}}
	 
	 </b>`);
	console.log(gridDisplayTemplate({
		object: [
		  {
			name:'"Yehuda Katz"',
			image: '"imgstring1"',
			flavourText: '"ERFGSDGHSHFASDFGD"',
			  }
		  
		 
		], 
		 
	  }));
	  let elem = document.getElementById("gridArea")
	  elem.append($(gridDisplayTemplate({
		object: [
		  {
			name:'"Yehuda Katz"',
			image: `assets/img/1.fargeoversiktRmotRo.jpg`,
			flavourText: '"ERFGSDGHSHFASDFGD"',
			  }
		  
		 
		], 
		 
	  }) )[0] )
	console.log(template({ doesWhat: "rocks!"}));


	// console.log($(gridDisplayTemplate({
	// 	object: [
	// 	  {
	// 		name:'"Yehuda Katz"',
	// 		image: '"imgstring1"',//`assets/img/1.fargeoversiktRmotRo.jpg`
	// 		flavourText: '"ERFGSDGHSHFASDFGD"',
	// 		  }
		  
		 
	// 	], 
		 
	//   }) )[0])
  	// execute the compiled template and print the output to the console
  	

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