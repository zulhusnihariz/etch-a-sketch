const gridLayout = document.querySelector("#grid-layout");

const resetButton = document.querySelector("#reset-btn");

let input = 25;
let i = 1;

let inputSquared = Math.pow(input, 2);

// Create multiple div based on given input (squared); append to grid layout
for (i; i < inputSquared + 1; i++) {
	d = document.createElement("div");
	gridLayout.appendChild(d);
	d.className = "default-color";
}

const defaultColor = document.querySelectorAll(".default-color");

// function to change div color
function changeColor() {
	this.style.backgroundColor = "#ced4da";
	console.log("say Hi");
}

// Arrange grid based on input given
gridLayout.style.gridTemplateColumns = `repeat(${input}, minmax(auto,auto))`;
gridLayout.style.gridTemplateRows = `repeat(${input}, minmax(auto,auto))`;

// Style every div to be default color
for (i = 0; i < defaultColor.length; i++) {
	defaultColor[i].style.backgroundColor = "black";
	defaultColor[i].style.border = "1px solid rgba(237, 246, 249)";

	//change div color when mouse enter the div
	defaultColor[i].onmouseenter = changeColor;
}

// function to reset color
function resetColor() {
	for (i = 0; i < defaultColor.length; i++) {
		defaultColor[i].style.backgroundColor = "black";
	}
}

// reset grid layout on click
resetButton.onclick = resetColor;

console.log("end of code");
