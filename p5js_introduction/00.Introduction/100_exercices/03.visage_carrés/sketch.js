function setup() {
  createCanvas(600,600);
  rectMode(CENTER);
}

function draw(){
  rect(300, 300, 300, 300);
  rect(230, 220, 60, 60);

  rect(360, 220, 60, 60);
  if(frameCount % 10 < 5 ){
    fill(0)
  }
  rect(245, 235, 30,30);
  rect(375, 235, 30,30);
  fill(255);
  rect(250, 375, 30, 40);
  rect(280, 375, 30, 40);
  rect(310, 375, 30, 40);
  rect(340, 375, 30, 40);
}
