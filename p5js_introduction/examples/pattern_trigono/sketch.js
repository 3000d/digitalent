var radius = 50;
var halfRadius = radius/2;
var a=0.1;
var s;
var offsetStep;
function setup(){
  createCanvas(800,800);
  noFill();
  colorMode(HSB);
  frameRate(6);
  //strokeWeight(4);
  s  = createSlider(0,500, 1);
  s.input(changeStep);
}
function draw() {
  background(255);
  for (var gridX=0; gridX<=width; gridX+=halfRadius) {
    var offset = 0.01;
    for (var gridY = 0; gridY<=height; gridY+=halfRadius) {
      drawCircle(gridX, gridY, radius, a+offset);
      offset+=offsetStep;
    }
    a=a+0.01;
  }
}

function drawCircle( _x,  _y,  r,  angle) {
  push();
  translate(_x, _y);
  ellipse(0, 0, r, r);
  pX = cos(angle+_x)*r/2;
  pY = sin(angle+_y)*r/2;
  fill(0);
  
  ellipse(pX, pY, r/5, r/5);
  
  noFill();
  pop();
}

function changeStep(){
  offsetStep = s.value()/1000;
  
}