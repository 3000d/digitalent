var tailleCarre = 100;
function setup() {
  createCanvas(800, 800);
  noFill();
  strokeWeight(2);
}


function draw() {
  
  tailleCarre = 10* sin(millis());
  
  
  var indexCol = 0;
  for (var x = 0; x < width; x = x + tailleCarre) {
    stroke(255, 0,0);
    
    var indexLigne = 0;
    for (var y = 0; y < height; y = y + tailleCarre) {
      
      if((indexLigne % 2 == 0)&&(indexCol % 2 == 0) ||
        (indexLigne % 2 != 0) && (indexCol % 2 != 0)
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


}