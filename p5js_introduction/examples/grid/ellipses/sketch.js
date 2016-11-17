var cols = 10,
    rows = 10;
var w = 40;

function setup() {
    createCanvas(800, 800);
    background(0);
    strokeWeight(1);
    stroke(255);
    noFill();
    cols = (width / w);
    rows = height / w;
    colorMode(HSB);

}
var t = 0.0001;

function draw() {

    background(255);
    for(var j = 0; j < rows; j++){
      var y = j * w;
      for(var i = 0; i < cols; i++){
        var x = i*w;

        fill(0,200);
        noStroke();
        ellipse(x+w/2,y+w/2,w,w);
        fill(255);
        //stroke(255,120);
        var x1 = dist(x,y,width/2, height/2)/10;


        //line(x1,y,x1+w,y+w);
        ellipse(x+sin(t*x1)*w,y+cos(t*x1)*w,w/2,w/2);
      }

    }
    t+=0.001;
}
