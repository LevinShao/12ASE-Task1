// Get the canvas element
const canvas = document.getElementById("myCanvas");

// Get the 2D drawing context
const ctx = canvas.getContext("2d");

// Set the fill color to red
ctx.fillStyle = "red";

// Draw a filled rectangle:
// fillRect(x, y, width, height) 
// Dimensions: (250, 60) is the top-left corner, width 500, height 350
ctx.fillRect(250, 60, 500, 350);