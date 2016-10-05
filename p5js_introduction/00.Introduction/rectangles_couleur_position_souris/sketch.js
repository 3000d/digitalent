/**
 * exercice sur les positons de la souris
 */

var rouge;

function setup() {
  createCanvas(1200, 200);
  noStroke();
  rouge = 255;
}

function draw() {
  background(200);
  fill(0,255, 0);
  rect(0, 0, mouseX, height );
  fill(rouge, 0, 0);
  rect(mouseX, 0, width, height);


  if(mouseIsPressed){
    if(mouseButton == "left"){
      rouge = (rouge + 10);
    }else{
      rouge = (rouge -10);
    }

    print(mouseButton);
  }


}
