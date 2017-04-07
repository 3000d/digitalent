/**
 * exercice sur les positons de la souris
 */

var rouge;
var positionX;
var a;
function setup() {
  createCanvas(1200, 200);
  noStroke();
  rouge = 255;
  positionX = width/2;
  a = 0.2;
}


function draw() {
  background(200);
  var positionX = mouseX;
  fill(0,255, 0);
  rect(0, 0, positionX, height );
  fill(rouge, 0, 0);
  rect(positionX, 0, width, height);

  a+=0.0001;
  if(mouseIsPressed){
    if(mouseButton == "left"){
      rouge = (rouge + 10);
    }else{
      rouge = (rouge -10);
    }

    print(mouseButton);
  }


}
