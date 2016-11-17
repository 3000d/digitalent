var cols = 10, rows = 10;
var sz = 80;
var t = 0;
var offsetY=0;
var offsetX = 0;
function setup() {
  createCanvas(800, 800);
  cols = (width/sz);
  rows = height/sz
  noFill();
  //noStroke();
  strokeWeight(1);
}

function draw() {

  t+=0.01;
  background(255);

  for(var j = 0; j<cols+1; j++){
    var x = j * sz;

    //if(round(offsetY) == 1 || round(offsetY) == 0){
      offsetX = 1.0 - pow(max(0.0, abs(sin(t))*2.0-1.0), 24)*sz*2;
    //}

    for(var i = 0; i<rows+1; i++){
      var y = i * sz;
      offsetY = 1.0 - pow(max(0.0, abs(cos(t))*2.0-1.0), 3.0);

      fill(255,0,0)
      text(round(offsetX), 10,10);
      text(offsetY, 10,20);
      if(i%2 == 0){
        x += offsetX;
      }else{
        x -= offsetX;
      }
      if(j%2 == 0){
        y += offsetY*sz;
      }else{
        y -= offsetY*sz;
      }
      if((i+j) % 2 == 0){
        fill(0);
      }else{
        fill(255);
      }

      rect(x,y, sz,sz);
      //fill(255,0,0);
      //text(i+","+j, x, y+sz/2);

    }

  }
}
