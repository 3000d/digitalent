/**
 * Introduction aux boucles
 *
 **/
function setup() {
  createCanvas(800, 800);
  var index = 0;
  // while(/*condition*/ index < 10 ){
  //   rect(40*index, height/2, 30,30 );
  //   console.log("index : "+index);
  //   index = index + 1;
  //
  // }
}

function draw() {
  background(255);
  noFill();
  rect(0,0, width-1, height-1);
  for(var x = 0; x < width; x = x + 40){
    // var r = map(x, 0, 800, 0, 255);
    // fill(r, 0, 0);
    for(var y=0; y <height; y+=40){
      // for(var taille = 1; taille < 5; taille+=1){
        rect(x,y,40, 40);
      // }
    }


  }

}
