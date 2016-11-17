/*
* Introduction à l'utilisation des arrays
*/
// palette:  https://color.adobe.com/fr/Limousine-color-theme-8811415
var couleurs = [
  '#262726',
  '#F1F0F2',
  '#101328',
  '#35365B',
  '#DAB081'
];
var hauteur;
function setup() {
   createCanvas(1000, 800);
   hauteur = height/couleurs.length;
   console.log(couleurs);
   
}

function draw() {
  for(var i = 0; i < couleurs.length; i++){
    var y = i *hauteur;
    fill(couleurs[i]);
    rect(0,y, width, hauteur);
  }
}
