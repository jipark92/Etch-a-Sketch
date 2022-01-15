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


//things to do: makes the buttons work. resume working on these below



//default color mode: black in option
const defaultColor = document.createElement("button");
defaultColor.setAttribute("id", "default-color");
defaultColor.textContent="Default Color Mode"; // sets button text to "black"
optionsContainer.appendChild(defaultColor);

//optional: rainbow mode
const rainbow = document.createElement("button");
rainbow.setAttribute("id", "rainbow");
rainbow.textContent="Rainbow(not working right now)";
optionsContainer.appendChild(rainbow);

//eraser in options
const eraser = document.createElement("button");
eraser.setAttribute("id", "eraser");
eraser.textContent="Eraser Mode"
optionsContainer.appendChild(eraser);

//clear grid in options buttons format 
const clear = document.createElement("button");
clear.setAttribute("id", "clear");
clear.textContent="Clear(not working right now)";
optionsContainer.appendChild(clear);
//ask for new number of squares in options slider/buttons format






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
blackPaint(); //calls blackPaint function

function eraserPaint(){ //black painter/marker/change background color function.
  const gridBoxs = container.querySelectorAll('.grid-box') //selects all DIV CLASS called "grid-box"
  eraser.addEventListener('click',()=> { // upon clicking the eraser button, it allows to change color.
    gridBoxs.forEach(gridbox => gridbox.addEventListener('mouseover',() =>{//selects each div grid-box when mouse is on top of div
      gridbox.style.background = 'lightslategrey'; // change background color
    }))
  })

}
eraserPaint(); //calls for eraser function



 



const footer = document.createElement("footer");
footer.setAttribute("id", "footer-container");
footer.textContent="Copyright @NorfKorean";
document.body.appendChild(footer);