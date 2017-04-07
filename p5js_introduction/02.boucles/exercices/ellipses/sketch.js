var angle = 0;
var radius = 100;
function setup() {
  createCanvas(800, 800);
  background(51);
  stroke(255);
  noFill();
}

function draw() {
  background(51,0.1);
  var x = mouseX + cos(angle)*radius;
  var y = mouseY + sin(angle)*radius;
  stroke(255,30);
  ellipse(x,y, 100,100)
  angle+=0.01;
}

function mousePressed(){
  background(51);
}
