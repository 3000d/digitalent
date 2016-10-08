/**
 * Un cercle grandit et rétrécit au fil de l'exécution 
 *
 */
var direction;
var diametre;
var vitesse;
function setup() {
  createCanvas(800, 800);

  direction = 1;
  diametre = 20;
  vitesse = 5;
}

function draw() {
  ellipse(width/2, height/2, diametre, diametre);

  diametre = diametre + (direction * vitesse);

  // si le diametre atteint les bornes fixées
  if(diametre>width*0.8 || diametre < 10){
    // on inverse la direction de la croissance
    direction = direction * -1;
  }

}
