/**
 *  La création de fonctions en javascript
 *
 **/

function setup() {
  createCanvas(800,800);
  rectMode(CENTER);
}

function draw(){
  background(255);
  //carre(mouseX, mouseY, 10);
  cercleEtCarre(width/2, height/2, 30, 100);

}

function cercleEtCarre(x,y, diam, cote){
  noFill();
  carre(x,y,cote);
  var posCercle = x + cote/2 +diam/2;
  cercle(posCercle,y, diam);
  // variable locale à la fonction
  var compteur =  1;

  console.log(compteur);
}

function cercle(x, y, diam){
  ellipse(x, y, diam, diam);
}

function carre(x,y, cote){
  rect(x,y,cote, cote);
}
