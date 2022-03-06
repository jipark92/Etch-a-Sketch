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
rainbow.textContent="Rainbow Mode";
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

//create grid
function gridBox(columns, rows){ 
  columns = 16;
  rows = 16;
  for(let i=0;i<(columns * rows);i++){ // cols * rows = the grid size
    const div = document.createElement('div'); //creates DIV element on body
    container.appendChild(div).classList.add('grid-box')//adds div "class grid-box" to "div class main-container"
  }
}
gridBox() // calls grid creation function. 

//create black painter
function blackPaint(){ //black painter/marker/change background color function.
  const gridBoxs = container.querySelectorAll('.grid-box') //selects all DIV CLASS called "grid-box"
  defaultColor.addEventListener('click',()=> { // upon clicking the default button, it allows to change color.
    gridBoxs.forEach(gridbox => gridbox.addEventListener('mouseenter',() =>{//selects each div grid-box when mouse is on top of div
      gridbox.style.background = 'black'; // change background color
    }))
  })

}
blackPaint(); //calls for blackPaint function

//create rainbow painter
function rainbowPaint(){
  const gridBoxs = container.querySelectorAll('.grid-box');//selects class grid-box
  rainbow.addEventListener('click', () => {// click button to make function work
    gridBoxs.forEach(gridbox => gridbox.addEventListener('mouseenter',()=>{//draws when mouse enters gridbox
      gridbox.style.background = randomRainbow();//change to random color using random color generator function.
    }))
  })
}
rainbowPaint()

//creater eraser
function eraserPaint(){ //eraser function that changes background color to default background color.
  const gridBoxs = container.querySelectorAll('.grid-box') //selects all DIV CLASS called "grid-box"
  eraser.addEventListener('click',()=> { // upon clicking the eraser button, it allows to change color.
    gridBoxs.forEach(gridbox => gridbox.addEventListener('mouseenter',() =>{//selects each div grid-box when mouse is on top of div
      gridbox.style.background = 'lightslategrey'; // change background color
    }))
  })

}
eraserPaint(); //calls for eraser function

//clears grid
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
     
  })
  
}
newGrid();
//random color number generator
function randomRainbow() {
  let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i <6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}
//create footer html
const footer = document.createElement("footer");
footer.setAttribute("id", "footer-container");
footer.textContent="Copyright @NorfKorean";
document.body.appendChild(footer);