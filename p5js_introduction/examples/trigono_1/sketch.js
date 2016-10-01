var angle;
var rayon;


function setup() {
  createCanvas(800, 800);
  angle = 0;
  rayon = 250;
  noFill();
  strokeWeight(0.6);
}

function draw() {
  translate(width / 2, height / 2);

  var x = rayon * cos(angle);
  var y = rayon * sin(angle);
  stroke(30, 0, 200, 20);
  ellipse(x, y, 180,180);
  
  angle += 0.09;
  if(angle > TWO_PI){
    angle = 0;
    rayon -= 12;
  }
  

}