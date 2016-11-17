

var diam = 8;
var seed = 0.1;
function setup() {
  createCanvas(800, 800);
  noFill();

  posDisque1 = random(width);
  //noiseSeed(seed);

}

function draw() {
  background(255);


  disque(0, height/2, diam, 10);

  disque(width, 0, 600, 100);

   disque(0, height, 600, 100);

   disque(width, height, 690, 10);
   diam+=3;
   if(diam > 200){
     diam = 10;
   }
}


function disque(posX, posY, tailleInitiale, ecart) {

  stroke(255, 0,0);
  for (var taille = tailleInitiale; taille > 0; taille -= ecart) {
    ellipse(posX, posY, taille, taille);
  }

}
