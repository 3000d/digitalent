
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
  background(255);
  strokeWeight(0.5);
}

function draw() {
  // background(200);
  noFill();
  stroke(0, 10);

  line(0,0, posX, posY);
  line(width, height, posX, posY);
  line(0, height, posX, posY);
  line(width, 0, posX, posY);


  //posX = posX + noise(seed)*cos(seed)*20;
  //posY = posY + sin(seed)*noise(seed*.3)*40;
  posX = mouseX;
  posY = mouseY;
  seed = seed + 0.02;

}

function mousePressed(){
  background(255);
  posX = width/2;
  posY = height/2;
}
