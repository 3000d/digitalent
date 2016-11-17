function setup() {
  createCanvas(1000,800); // va créer un canvas de 800 pixels de larges sur 500 pixels de haut

}

function draw(){
  stroke(2);
  line(width/2, 0, width*0.5, height);
  line(0, height/2, width, height/2);

//  ellipse(width/4, 250, 100, 100);

//  point(200,250);
//  rect(350, 200, 100, 100);
//  line(0, 250, 800, 250);
//  triangle(400,300,200,500,600,500);
//  quad(10, 30, 10, 70, 260, 100, 470, 20);
  fill(255,0,0);
  arc(width/2, height/2, 100, 100, PI, PI+HALF_PI);
}
