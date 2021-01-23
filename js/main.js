const gridLayout = document.querySelector("#grid-layout");
const defaultColor = document.querySelectorAll(".default-color");
// const defaultColorID = document.getElementById("default-color");

let input = 10;
let i = 1;

let inputSquared = Math.pow(input, 2);

for (i; i < inputSquared + 1; i++) {
	d = document.createElement("div");
	gridLayout.appendChild(d);
	d.className = "default-color";
}

gridLayout.style.gridTemplateColumns = `repeat(${input}, minmax(auto,auto))`;
gridLayout.style.gridTemplateRows = `repeat(${input}, minmax(auto,auto))`;

for (i = 0; i < defaultColor.length; i++) {
	defaultColor[i].style.backgroundColor = "black";
	defaultColor[i].style.border = "1px solid rgba(237, 246, 249)";
}
console.log("hello");

// defaultColorID.addEventListener("mouseenter", e => {
// 	defaultColor.style.backgroundColor = "white";
// });
