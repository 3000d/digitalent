/**
 * Introduction aux boucles
 *
 **/
var size;

function setup() {
  createCanvas(800, 800);
  noFill();
}

function draw() {
  // background(255);
  stroke(0,10);

  size = 10;
  for(var nbr=1; nbr < 10; nbr++ ){
    ellipse(mouseX, mouseY, nbr*10, nbr*10);
    line(width/2,height/2, mouseX, mouseY)
  //  ellipse(mouseX+nbr*10, mouseY, nbr*10, nbr*10);
  //  ellipse(mouseX-nbr*10, mouseY, nbr*10, nbr*10);
  }
  /*
  while(size < width/4){
    ellipse(mouseX, mouseY, size, size);
    console.log(size);
    size+=10;
  }
  */
}
