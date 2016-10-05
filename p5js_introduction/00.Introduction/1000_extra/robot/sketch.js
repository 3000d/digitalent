function setup(){
  createCanvas(800,800);
  background(255);

}

function draw(){
  line(400, 0, 400, 800);
  line(0, 400, 800, 400);
  fill(255);
  // face
  rect(150, 150, 500, 500);
  // oeil gauche
  rect(250,250, 80, 80);
  // pupille gauche
  fill(0);
  rect(290, 290, 40,40);
  // oeil droit
  fill(255);
  rect(470,250, 80, 80);
  // pupille droite
  fill(0);
  rect(470, 290, 40,40);

  // bouche
  fill(255);
  rect(290, 525, 40, 80);
  rect(330, 525, 40, 40);
  rect(370, 525, 40, 40);
  rect(410, 525, 40, 40);
  rect(450, 525, 40, 40);
  rect(490, 525, 40, 80);
}

function mousePressed(){
  console.log("x: "+mouseX+",y: "+mouseY);
}
