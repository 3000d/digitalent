var taille = 25;
var rouge = 0;
var texte = "Hello world";

function setup() {
  createCanvas(1000,1000);

  noFill();
  strokeWeight(0.5);
}

function draw(){
  stroke(rouge,0, 0);
  ellipse(width/2, height/2, taille, taille);
  ellipse(width, height/2, taille, taille);
  ellipse(0, height/2, taille, taille);
  //rect(0, 0, taille, taille);
  if(taille < width){
    taille = taille + 5;
  }else{
    background(255);
    taille = 10;
  }
  rouge = rouge+1;
  if(rouge > 255){
    rouge = 0;
  }

//  background(255, 10);

/*


  line(0, 0, mouseX, mouseY);
  line(width, 0, mouseX, mouseY);
  line(0,height, mouseX, mouseY);
  line(width, height, mouseX, mouseY );
  */
}

function mousePressed(){
  taille = 10;
  background(255);


}
