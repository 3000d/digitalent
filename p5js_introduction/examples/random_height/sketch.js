/*
* Introduction à l'utilisation des arrays
*/
// palette:  https://color.adobe.com/fr/Limousine-color-theme-8811415
var couleurs = [
  '#004358',
  '#1F8A70',
  '#BEDB39',
  '#FFE11A',
  '#FD7400'
];
var hauteurRestante;
var hauteursRect = [];
function setup() {

   createCanvas(1000, 800);
   strokeWeight(5);
   hauteurRestante = height;
   for(var i = 0; i < couleurs.length; i++){

    var h = random(0,hauteurRestante);
    if(i==0){
      h = random(0, height/4);
    }

     hauteursRect.push(h);
     hauteurRestante -= h;
   }

}

function draw() {
  var posY = 0;
  for(var i = 0; i < hauteursRect.length; i++){
    fill(couleurs[i]);
    rect(0,posY, width, hauteursRect[i]);
    posY += hauteursRect[i];
  }
}
function mousePressed(){
  redraw();
}
function resetHauteurs(){

}
