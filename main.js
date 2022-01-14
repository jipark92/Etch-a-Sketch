const container = document.createElement("div");
container.classList.add("container");
container.textContent="hello world";
document.body.appendChild(container);


const gridBox = document.createElement("div");
gridBox.classList.add("gridBox");
gridBox.textContent="hello person";


container.appendChild(gridBox);