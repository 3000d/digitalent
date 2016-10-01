function setup() {
  createCanvas(800,800);
  background(250);
}

function draw() {
  
  line(0, height, mouseX, mouseY);
  line(width, height, mouseX, mouseY);
}