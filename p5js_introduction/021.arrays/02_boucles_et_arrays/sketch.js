/**
 * Utilisation des tableaux en combinaison avec les boucles
**/

var couleurs = [];
function setup() {
   createCanvas(800, 800);
   couleurs = [25, 78, 224, 484];
   noFill();
}

function draw() {
  // array.length contient la longeur du tableau (le nombre d'éléments)
  for(var index = 0; index < couleurs.length; index = index+1){
    fill(couleurs[index]);
    rect(random(width/2), random(height/2), 100, 100);
  }
}
