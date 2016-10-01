var posDisque1 = 0;

function setup() {
  createCanvas(800, 800);
  noFill();
  
 
}

function draw() {
  background(255);
  
  
  
/*
  disque(0, 0, 600, 10);
  
  disque(width, 0, 600, 100);
  disque(0, height, 600, 100);
  disque(width, height, 690, 10);
*/
}


function disque(posX, posY, tailleInitiale, ecart) {
  
  stroke(255, 0,0);
  for (var taille = tailleInitiale; taille > 0; taille -= ecart) {
    ellipse(posX, posY, taille, taille);
  }
  pop();
}