function setup(){

  createCanvas(800, 400);

}



function draw(){

  carre(width/2, height/2, 100);

  carre(width/4, height/2, 100);
  carre(width*0.75, height/2, 100);
}

function carre(x, y, cote){
  push();
  translate(x,y);
  rotate(HALF_PI/2);
  rect(0,0, cote,cote);
  pop();
}
