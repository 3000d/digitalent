var posX = 0;
function setup() {
   createCanvas(800, 800);
   frameRate(24);
}

function draw() {
  
  for(var posX=0; posX<width; posX = posX + 80){
    rect(posX, mouseY, 30, 30);
  }
  
  /*
  var posY = 0;
  while(posY < height){
    rect(width/2-15, posY, 30, 30);
    posY = posY + 40;
  }
  */
  
}