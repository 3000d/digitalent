var d = 400;

function setup() {
    createCanvas(800, 800);

}

function draw() {
  background(255);
  diam = 600;
  while(diam > 100){
    ellipse(mouseX, mouseY, diam, diam);
    diam = diam -50;
  }
  // rect(width/2-100, height/2-100, 200, 200);
}
