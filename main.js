//creates header 
const headerContainer = document.createElement("header");
headerContainer.classList.add("header-container");
document.body.appendChild(headerContainer);
//creates title in h3
const title = document.createElement("h1");
title.setAttribute("id", "title")
title.textContent="Etch-A-Sketch";
headerContainer.appendChild(title);




//adds main container
const container = document.createElement("main");
container.classList.add("main-container");
document.body.appendChild(container);

//adds options div
const optionsContainer = document.createElement("div");
optionsContainer.classList.add("options-container");
document.body.appendChild(optionsContainer);



//default color mode: black in option
const defaultColor = document.createElement("button");
defaultColor.setAttribute("id", "default-color");
defaultColor.textContent="Default Color Mode"; 
optionsContainer.appendChild(defaultColor);

//optional to do: rainbow mode**************
const rainbow = document.createElement("button");
rainbow.setAttribute("id", "rainbow");
rainbow.textContent="Rainbow";
optionsContainer.appendChild(rainbow);

//eraser in options
const eraser = document.createElement("button");
eraser.setAttribute("id", "eraser");
eraser.textContent="Eraser Mode"
optionsContainer.appendChild(eraser);

//clear grid in options buttons format 
const clear = document.createElement("button");
clear.setAttribute("id", "clear");
clear.textContent="Clear";
optionsContainer.appendChild(clear);


//new grid button
const newGrids = document.createElement("button");
newGrids.setAttribute("id", "new-grid");
newGrids.textContent="New Grid";
optionsContainer.appendChild(newGrids);






function gridBox(columns, rows){ //function to draw grid
  for(let i=0;i<(columns * rows);i++){ // cols * rows = the grid size
    const div = document.createElement('div'); //creates DIV element on body
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr`; // makes columns and 1 fraction size 
    container.style.gridTemplateRows = `repeat(${rows}, 1fr`; //makes rows and 1 fraction size
    container.appendChild(div).classList.add('grid-box')//adds div "class grid-box" to "div class main-container"
  }
}

gridBox(16,16) // calls grid creation function. (marks default grid size 16x16)

function blackPaint(){ //black painter/marker/change background color function.
  const gridBoxs = container.querySelectorAll('.grid-box') //selects all DIV CLASS called "grid-box"
  defaultColor.addEventListener('click',()=> { // upon clicking the default button, it allows to change color.
    gridBoxs.forEach(gridbox => gridbox.addEventListener('mouseover',() =>{//selects each div grid-box when mouse is on top of div
      gridbox.style.background = 'black'; // change background color
    }))
  })

}
blackPaint(); //calls for blackPaint function




function rainbowPaint(){
  const gridBoxs = container.querySelectorAll('.grid-box');
  rainbow.addEventListener('click', () => {
    gridBoxs.forEach(gridbox => gridbox.addEventListener('mouseover',()=>{
      gridbox.style.background = randomRainbow();
    }))
  })
}
rainbowPaint()


function eraserPaint(){ //eraser function that changes background color to default background color.
  const gridBoxs = container.querySelectorAll('.grid-box') //selects all DIV CLASS called "grid-box"
  eraser.addEventListener('click',()=> { // upon clicking the eraser button, it allows to change color.
    gridBoxs.forEach(gridbox => gridbox.addEventListener('mouseover',() =>{//selects each div grid-box when mouse is on top of div
      gridbox.style.background = 'lightslategrey'; // change background color
    }))
  })

}
eraserPaint(); //calls for eraser function


function clearMode() { //clears grid by refreshing page(lazy way)
  const clearGrid = document.querySelector('#clear'); //selects clear button
  clearGrid.onclick = () => { // clear grid/refresh page when mouse clicks on the button.
    window.location.reload();// method to refresh page
    
  }
  
}
clearMode(); //calls for clear grid/refresh page function
 

function newGrid() {
  const newGridBox = document.querySelector('#new-grid')
  

  newGridBox.addEventListener('click',()=>{
    let x = prompt("how many rows?");
    let y = prompt("how many columns?");
    console.log(x,y);
    gridBox(x,y);

    if ( x > 100 && y > 100){
     
      let newX = prompt("ERROR:please enter below 100 for rows");
      let newY = prompt("ERROR:please enter below 100 for columns");

      gridBox(newX, newY);
    }
   

  })
  
}
newGrid();


function randomRainbow() {
  let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i <6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

const footer = document.createElement("footer");
footer.setAttribute("id", "footer-container");
footer.textContent="Copyright @NorfKorean";
document.body.appendChild(footer);