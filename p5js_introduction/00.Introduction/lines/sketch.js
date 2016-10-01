
var posX;
var posY;
var diam;
var seed = 0.3;
function setup() {
  createCanvas(900,900);
  console.log(width);
  posX = width/2;
  posY =height/2 ;
  diam = 30;
  background(0);
  strokeWeight(0.7);
}

function draw() {
  // background(200);
  noFill();
  stroke(255, 150);
  
  line(0,0, posX, posY);
  line(width, height, posX, posY);
  line(0, height, posX, posY);
  line(width, 0, posX, posY);


  posX = posX + noise(seed);
  posY = posY + random(-1, 1)*noise(seed);
  
  seed = seed + 0.01;

}