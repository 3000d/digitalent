/**
 * Introduction aux boucles
 *
 **/
var size;

function setup() {
  createCanvas(800, 800);
  noFill();
}

function draw() {
  // background(255);
  stroke(0,10);

  size = 10;
  while(size < width/4){
    ellipse(mouseX, mouseY, size, size);
    console.log(size);
    size+=10;
  }
}
