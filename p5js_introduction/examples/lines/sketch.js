var r, theta, offset;

function setup() {
  createCanvas(800, 800);
  initialize();
  colorMode(HSB);
  strokeWeight(0.1);
}


function draw() {
  stroke(degrees(theta), 255, 255, 2);
  // calcul du point d'origine des lignes
  var x = width / 2 + cos(theta) * r;
  var y = height / 2 + sin(theta) * r;

  
  // calcul du point de destination des lignes
  var mult = 12;
  var cosR = offset + cos(r*r) * theta ;
  var sinR = offset + sin(r*r) * theta ;
  var plusEndX = x + mult * sinR;
  var plusEndY = y + mult * cosR;
  var minusEndX = x - mult * sinR;
  var minusEndY = y - mult * cosR;
  
  // dessine 4 lignes à l'écran
  line(x, y, minusEndX, minusEndY);
  line(x, y, plusEndX, minusEndY);
  line(x, y, plusEndX, plusEndY);
  line(x, y, minusEndX, plusEndY);
  
  // augmente l'angle et le rayon
  r += 0.08;
  theta += 0.231;
  
  if (theta > TWO_PI) {
    theta = 0;

  }
  if (r > width / 2) {
    r = 0;
    offset += 1;
  }
}

function initialize() {
  background(0);
  r = 0;
  theta = 0.1;
  offset = 0;
}

function mousePressed() {
  initialize();
}