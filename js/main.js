const gridLayout = document.querySelector("#grid-layout");
const resetButton = document.querySelector("#reset-btn");
const gridInput = document.querySelector("#grid-input");
const colorInput = document.getElementById("color-input");

let input = 4;
let inputSquared = Math.pow(input, 2);
let defaultColor;

let i;

// Create multiple div based on given input (squared); append to grid layout
function createGrid(inputSquared) {
	for (i = 1; i < inputSquared + 1; i++) {
		d = document.createElement("div");
		gridLayout.appendChild(d);
		d.className = "default-color";
	}

	defaultColor = document.querySelectorAll(".default-color");
	console.log("Number of child in gridLayout: " + gridLayout.childElementCount);

	return defaultColor;
}

// Arrange grid based on input given
function arrangeGrid(input) {
	console.log(`Input in arrangeGrid: ${input}`);
	gridLayout.style.gridTemplateColumns = `repeat(${input}, minmax(auto,auto))`;
	gridLayout.style.gridTemplateRows = `repeat(${input}, minmax(auto,auto))`;
}

// Style every div to be default color
function setColor(className) {
	for (i = 0; i < className.length; i++) {
		className[i].style.backgroundColor = "black";
		className[i].style.border = "1px solid rgba(237, 246, 249)";
		className[i].onmouseenter = changeColor;
	}
}

// Remove div inside the screen
function removeGrid() {
	while (gridLayout.firstChild) {
		gridLayout.firstChild.remove();
	}
	console.log("successfully removed");
}

// Allow user to change grid size based on given input from prompt
function changeGridSize() {
	input = parseInt(prompt("Change grid size (9 equal to 9x9 size)"));

	if (isNaN(input)) {
		alert("Invalid Number");
		return;
	} else if (input > 100) {
		alert("100 is the limit");
		return;
	} else {
	}

	inputSquared = Math.pow(input, 2);
	console.log(`Input given: ${input}`);
	console.log(`Input Squared: ${inputSquared}`);

	removeGrid();
	createGrid(inputSquared);
	arrangeGrid(input);
	setColor(defaultColor);
}

// function to change div color
function changeColor() {
	this.style.backgroundColor = colorInput.value;
	console.log("say Hi");
}

//change div color when mouse enter the div

// function to reset color
function resetColor() {
	for (i = 0; i < defaultColor.length; i++) {
		defaultColor[i].style.backgroundColor = "black";
	}
}

// Initial setup
createGrid(inputSquared);
arrangeGrid(input);
setColor(defaultColor);

// reset grid layout on click
gridInput.onclick = changeGridSize;
resetButton.onclick = resetColor;

console.log("end of code");
