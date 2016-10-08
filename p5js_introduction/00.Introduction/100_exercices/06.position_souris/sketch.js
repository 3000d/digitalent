/**
 * Exrcice portant sur les conditions et le positionnement de la souris
 * l'objectif est de dessiner un rectangle coloré dans la partie de l'écran qui vient d'être cliquée
**/

function setup() {
  createCanvas(800, 800);

}

function draw() {
  background(255);
  /* dessiner une croix */
  // ligne verticale
  line(width/2, 0, width/2, height);
  // ligne horizontale
  line(0, height/2, width, height/2);

  // si la souris est clické
  if(mouseIsPressed){
    // variables contenant la position du rectangle coloré que nous allons dessiner
    var positionX = 0;
    var positionY = 0;
    // sommes nous dans la partie gauche de l'écran ?
    if(mouseX < width/2){
      // sommes nous en haut de l'écran ?
      if(mouseY < height/2){
        fill(255,0,0);

      }else{
        fill(0,255, 0);
        // on déplace l'origine de la position verticale
        positionY = height/2;
      }
    }else{
      // si nous ne sommes pas à gauche, nous sommes à droite
      // nous déplaçons donc l'origine de la position horizontale
      positionX = width/2;
      if(mouseY < height/2){
        fill(0,0,255);
      }else{
        fill("#F2CD51");
        //
        positionY = height/2;
      }
    }
    // finalement, nous dessinons le rectangle à sa position
    // le rectangle fait la moitié de la taille en hauteur et en largeur (=> 1/4 de la taille)
    rect(positionX, positionY, width/2,height/2);
  }



}
