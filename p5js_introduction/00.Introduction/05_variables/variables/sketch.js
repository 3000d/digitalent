
var posX=0;
var posY=-1;
var diametre=80;

function setup() {
  createCanvas(1000,1000);
  posX = width/2;
  posY = height/2 ;
  //diametre = 3;
  background(255);
  strokeWeight(1);
  frameRate(30);
}

function draw() {
  // background(200);
  noFill();
  stroke(255, 200);
  //ellipse(posX,posY, mouseX,mouseX);
  // posX = posX + 5;
  // posY = posY + 1;

  diametre = diametre + 10;


  //quad(mouseX, mouseY, width/2-mouseX, height/2-mouseY, 300, 400, 600, 400);

//  line(0,0, mouseX, mouseY);
//  line(width, height, mouseX, mouseY);
//  line(0, height, mouseX, mouseY);
//  line(width, 0, mouseX, mouseY);


  stroke(0,0,255);
  ellipse(0,0, diametre,diametre);
  stroke(0,255,0);
  ellipse(width, 0, diametre,diametre);
  stroke(255,0,0);
  ellipse(0, height, diametre,diametre);
  stroke(255,255,0);
  ellipse(width, height, diametre, diametre);

  if(diametre > width*3 ){


    background(255);


    diametre = 80;


  }

}

function keyPressed(){
  if(key==' '){
    background(255);
    diametre = 800;
  }
}
