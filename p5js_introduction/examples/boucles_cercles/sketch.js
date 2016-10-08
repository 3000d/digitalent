var tailleCarre = 30;
var ecart = 30;
var posX = 0;
var posY = 0;
var angle = 0.1;
function setup() {
  createCanvas(800, 800);
  noFill();
  strokeWeight(0.5);

  console.log("hello");
}

var a = 0.1;
function draw() {
  background(255, 200);
  angle+=0.005;
//  tailleCarre =  abs(sin(angle))*200;
  //tailleCarre = map(mouseX, 0,width, 100, 200);
  posX = 0;

  while(posX < width){

    posY = 0;
    var x=posX +tailleCarre/2 * cos(a);
    var i = 0;
    while(posY < height){
      noFill();

      ellipse(posX, posY, tailleCarre, tailleCarre);
      fill(0,100);


        var t = noise(angle);
        x += t;

        var y =posY +tailleCarre/2 * sin(a+posX*0.05);
        ellipse(x, y, 10,10);

      posY += ecart;
      i++;
    }

    posX+=ecart;
  }
  a+=0.1;
}
