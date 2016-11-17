var cols = 0,
    rows = 0;
var w = 80;
var a = 0.01;
var sm = 0.1;

function setup() {
    createCanvas(800, 800);
    background(255);
    strokeWeight(0.6);
    stroke(0);
    noFill();
    cols = width / w;
    rows = height / w;

}

function draw() {
    background(255,200);

    for(var r = 0; r <= rows; r++){
      var y = r * w;
      for(var c = 0; c <= cols; c++){
        var x = c * w;
        if((r+c)%2 ==0 ){
          noFill();
        }else{
          //fill(0);
        }

        push();
        translate(x,y);
        rotate(a);
        scale(sm);
        rect(w,w, w,w);
        ellipse(w/2,w/2, w*sm,w*sm);
        pop();
      }

    }
    a=a+0.01;
    sm += pow(sin(a),2.0)*0.01;
}

 function mouseReleased(){
   saveCanvas('bda','png');
 }
