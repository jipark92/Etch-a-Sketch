const headerContainer = document.createElement("header");
headerContainer.classList.add("header-container");
console.log(headerContainer);
document.body.appendChild(headerContainer);

const title = document.createElement("h1");
title.setAttribute("id", "title")
title.textContent="Etch-A-Sketch";
headerContainer.appendChild(title);



const container = document.createElement("div");
container.classList.add("grid-container");

console.log(container);
document.body.appendChild(container);






function setupGrid() {
    for (let i = 0; i < 1 * 256; i++) {
      const gridBox = document.createElement('div');
      gridBox.classList.add("gridBox");
      gridBox.textContent="grid box";
      container.appendChild(gridBox)
    }
}

setupGrid()



































const footer = document.createElement("footer");
footer.setAttribute("id", "footer-container");
footer.textContent="Copyright @NorfKorean";
console.log(footer);
document.body.appendChild(footer);