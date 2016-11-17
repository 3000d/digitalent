/**
 * Un cercle grandit et rétrécit au fil de l'exécution
 *
 */

var diametre;
var vitesse;
function setup() {
  createCanvas(800, 800);


  diametre = 20;
  vitesse = 10;
}

function draw() {
  ellipse(width/2, height/2, diametre, diametre);

  if(diametre > width/2 || diametre < 0){
    // changer la direction de la croissance
    vitesse = vitesse * -1;
  }


  diametre = diametre + vitesse;


}
