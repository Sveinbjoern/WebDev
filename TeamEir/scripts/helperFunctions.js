let keyCodes = {
	R: 82,
}
let tabVal = null;


function drawTabs(){
	strokeWeight(3);
	stroke(colors.black)
    for (let i = 0; i < tabVal.amount; i ++)
    {
        // console.log("amount of tabs + starts + color", tabVal.tabStarts[0],  tabVal.tabColor[ i%3] )
        drawTab(tabVal.tabStarts[i], tabVal.tabColor[ i%3],i)
    }
	
	let tabHeight = tabVal.tabBottom -1;
	line(0,tabHeight, tabVal.tabStarts[tabVal.currentTab], tabHeight);
	line(tabVal.tabStarts[tabVal.currentTab]+ tabVal.tabWidth, tabHeight, width, tabHeight);

	
	noStroke();
	fill(tabVal.tabColor[tabVal.currentTab%3])
	rect(0,tabVal.tabBottom , width, tabVal.tabBottom)
}

function drawTab(startingX, color,textIndex){
	fill(color);
	beginShape();
	vertex(startingX, tabVal.tabBottom)
	vertex(startingX + tabVal.tabNarrow, tabVal.tabHeight)
	vertex(startingX + tabVal.tabWidth - tabVal.tabNarrow, tabVal.tabHeight)
	vertex(startingX + tabVal.tabWidth, tabVal.tabBottom)
	endShape();
	textSize(tabVal.fontSize)
	textAlign(CENTER,CENTER)
	// console.log(document.getElementById("languageEN").checked)
	if (document.getElementById("languageEN").checked)
	{
		text(tabVal.tabTextEN[textIndex],
			startingX + tabVal.tabNarrow + tabVal.distance/4 ,
			tabVal.tabBottom - (tabVal.tabBottom-tabVal.tabHeight)/2
			)
	} else{
		// console.log(textIndex,"textIndex",tabVal.tabTextNo,"tabVal.tabTextNO" )
		text(tabVal.tabTextNo[textIndex],
			startingX + tabVal.tabNarrow + tabVal.distance/4 ,
			tabVal.tabBottom - (tabVal.tabBottom-tabVal.tabHeight)/2
			)
			// console.log(tabVal.tabBottom, tabVal.tabHeight)
	}
	
	// console.log("logging drawTab", startingX, tabVal.tabBottom, tabVal.tabHeight )
}

function createHandlebarElements(objectArray) {
	let elem = document.getElementById("gridArea") 
	//   }) )[0] )   ,1,2,3,4,5,6,7,8,9,10,11,12,13
	let object = $(gridDisplayTemplate(myDatabase.getSamlingObject(objectArray)))
	//   console.log("object",$(gridDisplayTemplate(myDatabase.getSamlingObject(objectArray)))[6])
	  let length = object.length;
	  for (let i = 0; i < length; i+=2)
	  {
		//   console.log("object[i]",object[i])
		  elem.append(object[i])
	  }
}

function removeChildren (elem) {
	console.log(elem)
	while (elem.firstChild) {
		elem.removeChild(elem.lastChild);
	  }
}

function fitToScreen(){
    console.log("fitToScreen");
    
    
    canvasContainer = select('#p5canvas');
    var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
    c.parent('p5canvas');
    update = true;
    
   }


function createSamlingData () {

}