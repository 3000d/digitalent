var theta = 1;
var r = 0;
var x = 0,
  y = 0;

function setup() {
  createCanvas(800, 800);
  background(0);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100);
  noFill();

}

function draw() {
  translate(width / 2, height / 2);
  background(0);
  drawCircles(x, y, 800);
  x= x + cos(theta)*r;
  y = y + sin(theta)*r;
  theta += .1;
  r += 0.0006;
}

function drawCircles(_x, _y, size) {
  if (size < 1) {
    return;
  }
  push();

  stroke((1/200)*size, 250, 200, 0.8);

  ellipse(_x, _y, size, size);

  pop();
  drawCircles(_x + cos(_x*r), _y + sin(y*r), size -= 10);
}