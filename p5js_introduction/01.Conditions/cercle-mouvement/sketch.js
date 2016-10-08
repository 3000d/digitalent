var positionX = 0;
var positionY = 0;
var diam = 80;
var deplacementX = 14;
var deplacementY = 44;

function setup(){
  createCanvas(800,800);
  background(0);
  fill(255);
  //noStroke();
  positionY = height/2;
}

function draw(){
  //background(0);
  //fill(random(0,255),10, 90, 200);
  ellipse(positionX, positionY, diam, diam);
/*
  if(positionX < width){
    positionX = positionX + 10;
  }else{
    positionX = 0;
  }
  */
//*
  if(positionX > width  ){
    deplacementX = deplacementX * -1;

  }

  if(positionX < 0){
    deplacementX = deplacementX * -1;

  }

  if(positionY > height){
    deplacementY *= -1;
  }
  if(positionY < 0){
    deplacementY *= -1;
  }
  positionX = positionX + deplacementX;
  positionY = positionY + random(deplacementY);
  //*/
   //positionY = positionY + random(-10,10);









}
