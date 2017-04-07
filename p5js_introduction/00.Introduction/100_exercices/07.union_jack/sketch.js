function setup() {
  createCanvas(800, 400);
  background(0,39,118);
  stroke(255);
  strokeWeight(80);
  line(0,0, width, height);
  line(0,height, width, 0);

  stroke(198,12,48);
  strokeWeight(45);
  line(0,0, width, height);
  line(0,height, width, 0);
  stroke(255);
  strokeWeight(75);
  line(width/2,0, width/2, height);
  line(0,height/2, width, height/2);
  stroke(198,12,48);
  strokeWeight(55);
  line(width/2,0, width/2, height);
  line(0,height/2, width, height/2);
}

function draw() {


}
