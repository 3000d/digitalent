var positionX = 0;
var positionY = 0;
var diam = 80;

function setup(){
  createCanvas(800,800);
  background(0);
  fill(255);

  positionY = height/2;
}

function draw(){
  background(0);

  ellipse(positionX, positionY, diam, diam);

  if(positionX < width){
    positionX = positionX + 10;
  }else{
    positionX = 0;
  }
}
