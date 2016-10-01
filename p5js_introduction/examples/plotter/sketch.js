function setup() {
  createCanvas(1000,1000);
  background(255);
  stroke(0);
}

function draw() {
  background(255);
  translate(width/2,height/2);
  for(var x = -4.5; x<=4.5;x+=0.00001){
     var y = sqrt(cos(x))*cos(300*sin(x))+sqrt(abs(x))-0.3 ;
     
     point(x*250,y*-250);
     
  }
}