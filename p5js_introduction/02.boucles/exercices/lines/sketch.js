var cols = 10,
    rows = 10;
var w = 400;
var a = 0;
var seedX = 0.1;
var seedY = 0.1;
function setup() {
    createCanvas(800, 800);
    background(0);
    stroke(255,100);

}

function draw() {
  background(0);
  a=0;
//  seed = 0;
  while(a<TWO_PI*4){
    var x = width/2 + noise(a)*w *cos(a);
    var y = width/2 +  noise(seedY) *sin(a)*w;
    a+=0.03;
    line(width/2,height/2, x,y);

  }
  seedY+=0.001;
}
