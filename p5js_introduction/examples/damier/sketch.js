var tailleCarre = 50;
var angle = 0;

function setup() {
  createCanvas(800, 800);
  noFill();
  strokeWeight(2);
}


function draw() {
  
  tailleCarre = 50 * sin(angle);
  
  
  var indexCol = 0;
  for (var x = 0; x < width; x = x + tailleCarre) {
    stroke(255, 0,0);
    
    var indexLigne = 0;
    for (var y = 0; y < height; y = y + tailleCarre) {
      if((indexLigne % 2 == 0)&&(indexCol % 2 == 0)
        ||(indexLigne % 2 != 0)&&(indexCol % 2 != 0)
      ){
        fill(255);
      }else{
        fill(0);
      }
      rect(x, y, tailleCarre, tailleCarre);
      
      indexLigne = indexLigne + 1;
    }
    indexCol = indexCol + 1;


  }

  angle += 0.1;
}