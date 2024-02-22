// WEB COLORS START
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "maroon", "cyan" ]

//htmml vars
let outputEl = document.getElementById("container");
//event listener on Go btn
document.getElementById("update-btn").addEventListener("click", updateColors)
function updateColors() {
  //Input
  let colorsStr = document.getElementById("colors-in").value;
  console.log(colorsStr);
//update colors array
colors = colorsStr.split(",");
}
// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "starts-with") {
    displayStartLetter();
  } else if (selection === "includes") {
    displayIncludes();
  }
}

// MENU FUNCTIONS
// Display All Colors
function displayAll() {
  console.log("Display All Colors");
  outputEl.innerHTML = "<h2>DISPLAY ALL COLORS<h2>"
 for (let color of colors){
  outputEl.innerHTML += `<h4 style="color:${color}">${color}</h4>`

 }


}

// Display all Colors with prompted Starting Letter
function displayStartLetter() {
  console.log("Colors that Start With...");
}

// Display all colors that include provided substring
function displayIncludes() {
  console.log("Colors that Include...");
}
