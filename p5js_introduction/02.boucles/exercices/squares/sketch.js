var cols = 10,
    rows = 10;
var s = 80;
var sDiff = 11;

var offsetX, offsetY;
var seedX, seedY;
function setup() {
    createCanvas(880, 880);
    background(255);
    offsetX = random(-6,6);
    offsetY = random(-6,6);
    rectMode(CENTER);
    strokeWeight(2);
    fill(255);
    seedX = 0.01;
    seedY = 0.02;

    for(var i = 0; i < cols; i++){
      for(var j = 0; j < rows; j++){
        offsetX = random(-7, 7);
        offsetY = random(-7, 7);
        // offsetX = noise((seedX*i))*5;
        // offsetY = noise(seedY*j)*5;
        rect(i*s, j*s, s, s);
        for(var k =0;k<8;k++){
          rect(i*s + offsetX *k, j*s + offsetY *k, s - k*sDiff, s - k*sDiff );
        }
        seedX+=0.0001;
        seedY+=0.0003;
      }

    }

}

function draw() {
  // background(255);


}

function mousePressed(){
  setup();
}
