function setup() {
  createCanvas(800,800);
}

function draw() {
  background(255);
  var posY = mouseY;
  for(var posX = 0; posX < width; posX = posX + 40){
    rect(posX, posY, 30,30);
  }
}

function mousePressed(){
  background(255);
}
