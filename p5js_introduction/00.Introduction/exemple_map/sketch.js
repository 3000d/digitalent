/*
  exemple d'utilisation de map
*/

function setup() {
  createCanvas(800, 800);
}

function draw() {
  var cote = map(mouseX, 0, width, 0, 200);
  
  rect(width/2, height/2, cote, cote);
}