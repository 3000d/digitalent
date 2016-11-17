var cols = 0,
    rows = 0;
var w = 80;

function setup() {
    createCanvas(800, 800);
    background(255);
    strokeWeight(1);
    stroke(0);
    noFill();
    cols = width / w;
    rows = height / w;


}
var a = 0.01;
function draw() {
    background(255,50);

    for(var r = 0; r < rows; r++){
      var y = r * w;
      for(var c = 0; c < cols; c++){
        var x = c *w;
        rect(x,y, w,w);
      }

    }
    a=a+0.01;

}
