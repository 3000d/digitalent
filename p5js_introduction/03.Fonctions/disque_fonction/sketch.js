var posDisque1 = 0;
var posY;
var diam = 8;
var seed = 0.1;
function setup() {
  createCanvas(800, 800);
  noFill();

  posDisque1 = random(width);
  //noiseSeed(seed);
  posY = height/2;
}

function draw() {
  // background(255, 100);
  seed = seed + 0.1;
  posDisque1 += 1;
 //var y = height * noise(seed);
// var y = random(0,height);
  posY = posY + sin(seed);
  var y = posY;

  //diam = diam - 1;

  if(posDisque1 > width){
    posDisque1 = 0;
  }

  if(diam < 10){
    diam = 200;
  }
  fill(0, 10);
  ellipse(posDisque1, y, 10, 10);
  //disque(posDisque1, height/2, diam, 10);

  // disque(width, 0, 600, 100);

  // disque(0, height, 600, 100);

  // disque(width, height, 690, 10);

}


function disque(posX, posY, tailleInitiale, ecart) {

  //stroke(255, 0,0);
  for (var taille = tailleInitiale; taille > 0; taille -= ecart) {
    ellipse(posX, posY, taille, taille);
  }

}
