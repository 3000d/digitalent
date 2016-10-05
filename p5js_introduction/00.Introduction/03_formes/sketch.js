function setup() {
  createCanvas(800,500); // va créer un canvas de 800 pixels de larges sur 500 pixels de haut

}

function draw(){
  ellipse(200, 250, 100, 100);
  rect(350, 200, 100, 100);
  line(0, 250, 800, 250);
  triangle(400,300,200,500,600,500);
  quad(10, 30, 10, 70, 260, 100, 470, 20);

}
