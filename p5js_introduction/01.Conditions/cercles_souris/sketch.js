function setup() {
  createCanvas(800,800);
  background(200);
}

function draw() {
  
  // si la souris est cliquée,
  if(mouseIsPressed){
    // la couleur de remplissage est noire
    fill(0);
    stroke(255);
  }else{
    // sinon, ce sera blanc
    fill(255);
    stroke(0);
  }
  // dessine un cercle à la position du pointeur de la souris
  ellipse(mouseX, mouseY, 90, 90);
}