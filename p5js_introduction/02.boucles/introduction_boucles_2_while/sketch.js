function setup() {
  createCanvas(800,800);
}

function draw() {
  var posX = 0;
  while(posX < width){
    rect(posX, height/2, 30, 30);
     posX = posX + 40;
  }
}
