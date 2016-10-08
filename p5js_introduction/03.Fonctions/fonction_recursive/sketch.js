/**
 *  La création de fonctions en javascript
 *
 **/

function setup() {
  createCanvas(800,800);
  rectMode(CENTER);
}

function draw(){
  background(251);
  rect(width/2, height/2, 400, 400);
  cercles(mouseX, mouseY,  500);
  //losange(width/2, height/2, 50, 100);
}

function cercles(x, y, diam){
  if(diam < 20) {
    return
  };
  noFill();
  ellipse(x, y, diam, diam);
  ellipse(x+diam/2, y, diam, diam);
  ellipse(x-diam/2, y, diam, diam);
  ellipse(x, y-diam/2, diam, diam);
  ellipse(x, y+diam/2, diam, diam);
  var diam = diam - 20;
  cercles(x,y, diam);
}

function losange(x, y, l, h){
  quad(x-l/2, y+h/2, x, y, x+l/2, y+h/2, x, y+h);
}
