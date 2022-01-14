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

//choose any color mode in options
const color = document.createElement("button");
color.setAttribute("id", "color");
color.textContent="Color";
optionsContainer.appendChild(color);
//default color mode: black in option
const defaultColor = document.createElement("button");
defaultColor.setAttribute("id", "default-color");
defaultColor.textContent="Default";
optionsContainer.appendChild(defaultColor);
//optional: rainbow mode
const rainbow = document.createElement("button");
rainbow.setAttribute("id", "rainbow");
rainbow.textContent="Rainbow";
optionsContainer.appendChild(rainbow);
//eraser in options
const eraser = document.createElement("button");
eraser.setAttribute("id", "eraser");
eraser.textContent="Eraser";
optionsContainer.appendChild(eraser);
//clear grid in options buttons format 
const clear = document.createElement("button");
clear.setAttribute("id", "clear");
clear.textContent="Clear";
optionsContainer.appendChild(clear);
//ask for new number of squares in options slider/buttons format



function setupGrid() {
    for (let i = 0; i < 256; i++) {
      const gridBox = document.createElement('div');
      gridBox.classList.add("gridBox");
      container.appendChild(gridBox)
    }
}
setupGrid();











const footer = document.createElement("footer");
footer.setAttribute("id", "footer-container");
footer.textContent="Copyright @NorfKorean";
document.body.appendChild(footer);