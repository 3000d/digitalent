var tailleCarre = 50;
var posX = 0;
var posY = 0;
var angle = 0.1;
function setup() {
  createCanvas(800, 800);
  noFill();
  strokeWeight(2);
}


function draw() {
  background(255, 200);
  angle+=0.01;
  //tailleCarre = 410 + sin(angle)*400;
  posX = posY = 0;
  
  while(posX < width){
    line(posX, 0, posX, height);
    posX+=tailleCarre;
  }
  while(posY < height){
    line(0, posY, width, posY);
    posY += tailleCarre;
  }
}
