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

	
	

	//create eventlistener that saves the language choice to localStorage
	let elem = document.getElementById("languageEN")
	elem.addEventListener('change', () => {
		// console.log("eventlister working", elem.checked,JSON.stringify(elem.checked))
		window.localStorage.setItem("English", JSON.stringify(elem.checked))
		update = true;
	  });

	//load from localStorge your language settings
	let set = window.localStorage.getItem("English")
	// console.log("set",set)
  	if (set != undefined)
	{
		// console.log("set",set)
	  elem.checked = JSON.parse(set);

	} 
	
	//create a canvas to fill the content div from index.html
	fitToScreen();

	// background(255);
	
	colors.setup()
	
	

	//handlebars handling. Filling the templates in the page.
	gridBlogTemplate = Handlebars.compile(gridBlogTemplate);
	console.log(gridBlogTemplate)
	// createHandlebarElements([{type: "tegneserie", indices: [0,1,2,3,4,5,6,7,8,9,10,11,12]},{type: "utfoldelse", indices: [0,1,2,3,4,5,6,7]}, {type: "husflid", indices: [0,1,2,3]}])
	elem = document.getElementById("gridArea") 
	//   }) )[0] )   ,1,2,3,4,5,6,7,8,9,10,11,12,13
	console.log("myDatabase.getBlogObject()",myDatabase.getBlogObject())
	console.log("gridBlogTemplate(myDatabase.getBlogObject())",gridBlogTemplate(myDatabase.getBlogObject()))
	console.log("$(gridBlogTemplate(myDatabase.blogg[0]))",$(gridBlogTemplate(myDatabase.getBlogObject())))

	let object = $(gridBlogTemplate(myDatabase.getBlogObject()))
	console.log("object",object)
	console.log("object[0]", object[0] )
	elem.append(object[0])
	//   console.log("object",$(gridDisplayTemplate(myDatabase.getSamlingObject(objectArray)))[6])
	//   let length = object.length;
	//   for (let i = 0; i < length; i+=2)
	//   {
	// 	//   console.log("object[i]",object[i])
	// 	  elem.append(object[i])
	//   }	 
	
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