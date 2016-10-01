var angle = 0;
var radius = 400;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  translate(width/2, height/2);
  
  var x = radius * cos(angle);
  var y = radius * sin(angle);
  //if(mouseIsPressed){
    x = x * noise(angle);
  //}
  line(0, 0, x, y);
  angle+=0.03;
  if(angle>=TWO_PI){
    stroke(255,0,0);
    angle = 0;
    fill(255, 10);
    rect(0,0,width, height);
    noFill();
  }
}