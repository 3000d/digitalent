/*
* Introduction à l'utilisation des arrays
*/
// un array se déclare à l'aide de []
var tailles = [];
var taille1=25,
 taille2=120,
 taille3=244,
 taille4=650;
function setup() {
   createCanvas(800, 800);
   // un array peut contenir plusieurs valeurs rassemblées dans une même variable
   tailles = [25, 120, 224, 650];
   // un array a une `longueur` qui correspond au nombre d'éléments qu'il contient
   noFill();
}

function draw() {
  // on fait référence à une valeur particulière en appelant son index
  // les index d'arrays en informatique commencent à 0
  ellipse(width/2, height/2, taille1,taille1);

  ellipse(width/2, height/2, tailles[1], tailles[1]);
  ellipse(width/2, height/2, tailles[2], tailles[2]);
  ellipse(width/2, height/2, tailles[3], tailles[3]);


}
