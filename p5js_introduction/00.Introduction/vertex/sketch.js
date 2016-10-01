function setup() {
  createCanvas(500,500);
}

function draw() {
  /*
  fill(255,0,0);
  
  triangle(0,100,100,50, 150, 100);
  strokeWeight(6);
  stroke(45,129,98);
  triangle(100,300,130,70, 170, 90);
  quad(250, 250, 300, 250, 300, 300, 175, 300);
  */
  background('#debeff');
  beginShape();
  
  vertex(300, 300);
  ellipse(300,300, 10,10);
  curveVertex(300, 400);
  ellipse(300,400, 10,10);
  curveVertex(350, 450);
  ellipse(250,450);
  vertex(250, 450);
  curveVertex(150, 450);
  // vertex(200, 460);
  // vertex(10, 460);
  // vertex(160, 460);
  endShape(CLOSE);
  
  
}