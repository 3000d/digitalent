var rotation = 1;
var dir = 0.1;
var step =10;

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  background(51);
  colorMode(HSB,360,100,100,1);
  stroke(0,255,255);
  noFill();
  strokeWeight(0.5);
  
  
}



function draw(){
  fill(0,0,0,0.6);
  noStroke();
  rect(0,0,width,height);
  noFill();
  
  var x=0;

  push();
  translate(window.innerWidth/2,window.height/2);
  rotate(radians(rotation/2))
  //beginShape(TRIANGLES);
  while (x < width/2) {
    var y = sin(atan(x,0)*42+cos(radians(rotation*2)))*height/4;
    
stroke(180+x/width/2*360,70,100,0.3);
    //line(x,y, x, y+step*70 );
    line(-x,y,0, 0);
    line(x,y,0,0);
   


    x+=step;
  }
  //endShape();
  pop();
  rotation+=dir;
  if((rotation%360)==0 || rotation < 0){
    background(0);
    dir*=-1;

  }



}
