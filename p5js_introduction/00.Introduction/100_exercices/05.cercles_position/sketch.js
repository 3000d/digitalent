/**
 * Exrcice portant sur le positionnement relatid des éléments et l'utilisation des variables
**/
var diam = 300;
var centreH = 0;
var centreV = 0;
var grow = 1;
function setup() {
  createCanvas(1000, 800);
  centreH = width /2;
  centreV = height/2;
  noFill();
}

function draw() {
  stroke(75,0,255,10);
  centreH = mouseX;
  centreV = mouseY;
  ellipse(centreH, centreV, diam, diam);
  ellipse(centreH, centreV-diam/2, diam, diam);
  ellipse(centreH, centreV+diam/2, diam, diam);
  ellipse(centreH-diam/2, centreV, diam, diam);
  ellipse(centreH+diam/2, centreV,diam, diam);
  diam+=grow*3;

  if(diam>1800){
    grow*=-1;
    //background(255);
  }
  if(diam < 10){
    grow *=-1;
  }


}

function mousePressed(){
  saveCanvas("image","png");
  background(255);
  diam = 12;
  grow = 1;
}
