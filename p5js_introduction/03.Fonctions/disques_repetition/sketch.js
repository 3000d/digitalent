function setup() {
  createCanvas(800, 800);
  noFill();
}

function draw() {
  background(255);


  var posX = width/2;
  var posY = height/2;
  var tailleInitiale = 800;
  var ecart = 3;
  
  for (var taille = tailleInitiale; taille > 50; taille -= ecart) {
    ellipse(posX,posY, taille, taille);

  }
  
  for (var taille = tailleInitiale; taille > 50; taille -= ecart) {
    ellipse(posX+5,posY-5, taille, taille);

  }
  posX = 0;
  posY = 0;
  for (var taille = tailleInitiale; taille > 50; taille -= ecart) {
    ellipse(posX,posY, taille, taille);

  }
  posX = width;
  posY= 0;
  for (var taille = tailleInitiale; taille > 50; taille -= ecart) {
    ellipse(posX,posY, taille, taille);

  }
  posX = 0;
  posY = height;
  for (var taille = tailleInitiale; taille > 50; taille -= ecart) {
    ellipse(posX,posY, taille, taille);

  }
  
  posX = width;
  posY = height;
  for (var taille = tailleInitiale; taille > 0; taille -= ecart) {
    ellipse(posX,posY, taille, taille);

  }

}