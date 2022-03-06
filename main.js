//creates header 
const headerContainer = document.createElement("header");
headerContainer.classList.add("header-container");
document.body.appendChild(headerContainer);

//creates title in h3
const title = document.createElement("h1");
title.setAttribute("id", "title")
title.textContent="Etch-A-Sketch";
headerContainer.appendChild(title);

//create main container
const container = document.createElement("main");
container.classList.add("main-container");
document.body.appendChild(container);

//create options div
const optionsContainer = document.createElement("div");
optionsContainer.classList.add("options-container");
document.body.appendChild(optionsContainer);

//create black mode button
const defaultColor = document.createElement("button");
defaultColor.setAttribute("id", "default-color");
defaultColor.textContent="Black Mode"; 
optionsContainer.appendChild(defaultColor);

//create rainbow mode button
const rainbow = document.createElement("button");
rainbow.setAttribute("id", "rainbow");
rainbow.textContent="Rainbow Mode";
optionsContainer.appendChild(rainbow);

//create eraser mode button
const eraser = document.createElement("button");
eraser.setAttribute("id", "eraser");
eraser.textContent="Eraser Mode"
optionsContainer.appendChild(eraser);

//create clear mode button
const clear = document.createElement("button");
clear.setAttribute("id", "clear");
clear.textContent="Clear";
optionsContainer.appendChild(clear);

//create new grid button
const newGrids = document.createElement("button");
newGrids.setAttribute("id", "new-grid");
newGrids.textContent="New Grid";
optionsContainer.appendChild(newGrids);

//create grid
function gridBox(col, row){ 
  let columns = col;
  let rows = row;
  for(let i=0;i<(columns * rows);i++){ 
    const div = document.createElement('div');
    container.appendChild(div).classList.add('grid-box')
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
  }
}

//load grid 
 function loadGrid() {
    window.addEventListener('DOMContentLoaded',()=>{
    gridBox(16,16);
    blackPaint();
    rainbowPaint();
    eraserPaint();
  })
 }
 loadGrid();

//use black painter
function blackPaint(){ 
  const gridBoxs = document.querySelectorAll('.grid-box') 
  defaultColor.addEventListener('click',()=> {
    gridBoxs.forEach(gridbox => gridbox.addEventListener('mouseenter',() =>{
      gridbox.style.background = 'black';
    }))
  })
}
blackPaint(); 

//use rainbow painter
function rainbowPaint(){
  const gridBoxs = document.querySelectorAll('.grid-box');
  rainbow.addEventListener('click', () => {
    gridBoxs.forEach(gridbox => gridbox.addEventListener('mouseenter',()=>{
      gridbox.style.background = randomRainbow();
    }))
  })
}
rainbowPaint()

//use eraser
function eraserPaint(){ 
  const gridBoxs = document.querySelectorAll('.grid-box') 
  eraser.addEventListener('click',()=> { 
    gridBoxs.forEach(gridbox => gridbox.addEventListener('mouseenter',() =>{
      gridbox.style.background = 'white'; 
    }))
  })
}
eraserPaint(); 

//clears grid
function clearMode() {
  const clearGrid = document.querySelector('#clear'); 
  clearGrid.onclick = () => { 
    window.location.reload();
  }
}
clearMode();
 
//create new grid
function newGrid() {

  //remove old grid
  const gridBoxs = document.querySelectorAll('.grid-box');
  function resetGrid(){
    gridBoxs.forEach(gridBox => gridBox.remove())
    container.remove()
  }
  
  //new grid
  const newGridBox = document.querySelector('#new-grid')
  newGridBox.addEventListener('click',()=>{
    let newRow = prompt('how many rows?');
    let newCol = prompt('how many columns?');
    if (!newCol && !newRow || newCol >= "64" && newRow >="64"){
      alert('You didnt submit any number or you exceeded grid amount.(amount below 64 only)');
    } else if ( newCol && newRow){
      gridBox(newRow,newCol)
      blackPaint()
      rainbowPaint()
      eraserPaint()
    }
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