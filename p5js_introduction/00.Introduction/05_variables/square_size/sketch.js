var tailleX, tailleY;
var epaisseur;

function setup() {
  createCanvas(801,800);
  background(228);
  epaisseur =4;
  strokeWeight(epaisseur);
  tailleX = width/2-epaisseur; 
  tailleY = height/2-epaisseur;
  noFill();
}

function draw() {
  background(228);
  if(mouseIsPressed){
    stroke(128, 20)  
  }else{
    stroke(0)
  }
  
  var newTailleY = tailleY * (mouseY/height);
  var newTailleX = tailleX * (mouseX/width);
  rect(0,0,newTailleX, newTailleY);
  rect(width/2, 0, newTailleX, newTailleY);
  rect(0, height/2, newTailleX, newTailleY);
  rect(width/2, height/2, newTailleX, newTailleY);
  
}