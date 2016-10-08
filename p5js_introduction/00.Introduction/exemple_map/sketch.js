/*
  exemple d'utilisation de map
*/
var cote = 40;

var posX = cote;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {
  posX = cote;
  while(posX < width){
    rect(posX, mouseY, cote, cote);
    posX = posX + cote + 60;
  }

//  var cote = map(mouseX, 0, width, 0, 200);

  //rect(width/2,height/2, 40, cote);
  // cote++;
  //line(pmouseX, pmouseY, mouseX, mouseY);

}
/*
function mouseDragged(){
  var weight = dist(pmouseX, pmouseY, mouseX, mouseY);
  // strokeWeight(weight);
  line(mouseX, mouseY, mouseX+10, mouseY+10);
  line(mouseX, mouseY, mouseX-10, mouseY+10);
  line(mouseX, mouseY, mouseX+10, mouseY-10);
  line(mouseX, mouseY, mouseX-10, mouseY-10);


}
*/
