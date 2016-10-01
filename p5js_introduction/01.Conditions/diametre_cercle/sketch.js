/**
 * Un cercle grandit audurant l'exécution
 */
// déclaration d'une variable 'diametre'
var diametre;
function setup() {
  createCanvas(800, 800);
  diametre = 0;
}

function draw() {
  
  background(255);
  // si le diamètre dépasse une certaine valeur changer la couleur du cercle
  if(diametre > 400){
    fill(255,0,0);
  }else{
    fill(0,0,255);
  }
  
  // si le diametre dépasse une autre valeur, remettre le diametre à 0
  if(diametre > 800){
    diametre = 10;
  }
  ellipse(width/2, height/2, diametre, diametre);
  // autre notation pour diametre = diametre + 1
  diametre +=100;
}