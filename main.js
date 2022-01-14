const container = document.createElement("div");
container.classList.add("grid-container");
container.textContent="grid-container";
console.log(container);
document.body.appendChild(container);

const gridBox = document.createElement("div");
gridBox.classList.add("gridBox");
gridBox.textContent="gridbox";
container.appendChild(gridBox);

const footer = document.createElement("footer");
footer.setAttribute("id", "footer-container");
footer.textContent="Copyright @NorfKorean";
console.log(footer);
document.body.appendChild(footer);
