var angle = 0;
var radius = 400;

function setup() {
  createCanvas(800, 800);
  background(0);

  strokeWeight(0.3);
}

function draw() {
  //fill(0,0.1);
  //rect(0,0,width,height);
  translate(abs(width*sin(angle/2)), height/2);

  var x = radius * cos(angle);
  var y = radius * sin(angle);

  x = x * noise(angle);
  stroke(0,10,255, 220);
  line(0, 0, x, y);
  angle+=0.03;

}
