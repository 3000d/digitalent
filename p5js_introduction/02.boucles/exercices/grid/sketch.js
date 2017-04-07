var cols, rows;
var largeur = 100;
var hauteur = 100;
function setup() {
    createCanvas(880, 880);
    background(255);
    cols = width/largeur;
    rows = height/hauteur;
    console.log('hello');
}

function draw() {
  background(255);
  for(var x = 0; x < cols; x++ ){
    line(x*largeur,0,x*largeur,height);
  }
  for(var y = 0; y < rows; y++){
    line(0, y*hauteur, width, y*hauteur);
  }
  if(mouseIsPressed){
    console.log(floor(mouseX/largeur)*largeur);
  }
    var posX = floor(mouseX/largeur)*largeur;
    var posY = floor(mouseY/hauteur)*hauteur;
    fill(255,0,0);
    rect(posX, posY, largeur, hauteur);
  //}


}

function mousePressed(){

}
