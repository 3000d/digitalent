function setup() {
  createCanvas(800, 800);
  noFill();
}
var t = 0.1;
function draw() {
  background(255,50);


  var posX = width/2;
  var posY = height/2;
  var tailleInitiale = 800;
  t += 0.01;
  //var ecart = 80+int((sin(t)*50)*cos(millis()/100));
  var ecart = 60;
/*
  for (var taille = tailleInitiale; taille > 50; taille -= ecart) {
    ellipse(posX,posY, taille, taille);

  }
*/
  for (var taille = tailleInitiale-sin(t)*ecart; taille > 50; taille -= ecart) {
    //ellipse(posX+cos(t)*40,posY-sin(t)*40, taille, taille);
    ellipse(posX,posY, taille, taille);

  }
  posX = 0;
  posY = 0;
  for (var taille = tailleInitiale+sin(t)*ecart; taille > 50; taille -= ecart) {
    ellipse(posX,posY, taille, taille);

  }
  posX = width;
  posY= 0;
  for (var taille = tailleInitiale-sin(t)*ecart; taille > 50; taille -= ecart/2) {
    ellipse(posX,posY, taille, taille);

  }
  posX = 0;
  posY = height;
  for (var taille = tailleInitiale-sin(t)*ecart; taille > 50; taille -= ecart) {
    ellipse(posX,posY, taille, taille);

  }

  posX = width;
  posY = height;
  for (var taille = tailleInitiale+sin(t)*ecart; taille > 0; taille -= ecart) {
    ellipse(posX,posY, taille, taille);

  }

}
