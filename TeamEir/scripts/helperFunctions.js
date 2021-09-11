function drawTabs(){
	strokeWeight(3);
	stroke(colors.black)
    for (let i = 0; i < tabVal.amount; i ++)
    {
        // console.log("amount of tabs + starts + color", tabVal.tabStarts[0],  tabVal.tabColor[ i%3] )
        drawTab(tabVal.tabStarts[i], tabVal.tabColor[ i%3])
    }
	
	let tabHeight = tabVal.tabBottom -1;
	line(0,tabHeight, tabVal.tabStarts[currentTab], tabHeight);
	line(tabVal.tabStarts[currentTab]+ tabVal.tabWidth, tabHeight, width, tabHeight);

	
	noStroke();
	fill(tabVal.tabColor[currentTab%3])
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

function removeChildren (elem) {
	while (elem.firstChild) {
		elem.removeChild(myNode.lastChild);
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