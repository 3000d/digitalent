
var posX;
var posY;
var diam;
function setup() {
  createCanvas(900,900);
  console.log(width);
  posX = width/2;
  posY =height/2 ;
  diam = 30;
  background(0);
  strokeWeight(0.3);
}

function draw() {
  // background(200);
  noFill();
  stroke(255, 80);
  //ellipse(posX,posY, mouseX,mouseX);
  // posX = posX + 5;
  // posY = posY + 1;
  // diam = diam - 10;
  //quad(mouseX, mouseY, width/2-mouseX, height/2-mouseY, 300, 400, 600, 400);
  
  line(0,0, mouseX, mouseY);
  line(width, height, mouseX, mouseY);
  line(0, height, mouseX, mouseY);
  line(width, 0, mouseX, mouseY);

  
  /*
  ellipse(0,0, 30,30);
  ellipse(width, 0, 30,30);
  ellipse(0, height, 30,30);
  ellipse(width, height, 30, 30);
  */
  
  

}