var cols = 10,
    rows = 10;
var w = 40;

function setup() {
    createCanvas(800, 800);
    background(0);
    strokeWeight(1);
    stroke(0,80);
    noFill();
    cols = (width / w);
    rows = height / w;

}

function draw() {
    background(255);
    var mult =1;// sin(millis()/10000)*2;
    for(var j = 0; j < rows; j++){
      var y = (j * w)+w/2;
      for(var i = 0; i < cols; i++){
        var x  = (i * w)+w/2;
        stroke(0, 200);

        ellipse(x,y,w*mult,w*mult);
        stroke(0,80);
        line(x,y,width/2,height/2);
      }
    }

}
