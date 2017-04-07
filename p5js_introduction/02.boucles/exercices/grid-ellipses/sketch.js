var cols, rows;
var largeur = 100;
var hauteur = 100;
function setup() {
    createCanvas(800, 800);
    background(255);
    cols = width/largeur;
    rows = height/hauteur;
    console.log('hello');
    //noFill();
    colorMode(HSB);
}

function draw() {
  background(255);
  for(var y = 0; y < rows; y++){
    for(var x = 0; x < cols; x++){
      //strokeWeight(x+1);
      //stroke(map(x*y,0,cols*rows, 0,360), 200, 200, 0.5);

      //strokeWeight(x+1);
      for(var t = hauteur; t > 10; t -= 10){
        var posX = x*hauteur;//+t*sin(y*millis()/10000);
        var posY = y*hauteur;//+t*cos(x*millis()/10000);

        ellipse(posX, posY,t,t);

        //rect(x*hauteur, y*hauteur, t, t);
      }

    }
  }

}

function mousePressed(){

}
