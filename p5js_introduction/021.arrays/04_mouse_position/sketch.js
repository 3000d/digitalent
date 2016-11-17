//  intitialisation du tableau
var positions = [];
var posX = 0;
function setup() {
   createCanvas(1000, 800);
   strokeWeight(2);
}

function draw() {
  background(255);

  // boucle sur tous les éléments du tableau
  for(var i = 1; i < positions.length; i+=2){
    stroke(255, 0,0);
    line(positions[i], 0, positions[i], height);

  }
  stroke(0);
  ellipse(posX, height/2, 150,150);
  for(var i = 0; i < positions.length; i+=2){
    stroke(0,0,255);
    line(positions[i], 0, positions[i], height);
  }
  posX += 5;
  if(posX > width){
    posX = 0;
  }
}

// lorsque la souris est relachée
function mouseReleased(){
  // ajout de la position de la souris au tableau
  positions.push(mouseX);
  positions.sort();
}
