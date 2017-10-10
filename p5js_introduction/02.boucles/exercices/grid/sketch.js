var cols, rows;
// width and height of each cell
var cellWidth = 150;
var cellHeight = 5;
function setup() {
    createCanvas(880, 880);
    background(255);
    // retrieve the number of columns according to the width of each cell
    cols = width/cellWidth;
    // retrieve the number of rows according to the height of each cell
    rows = height/cellHeight;

}

function draw() {
  background(255);
  // draws the grid
  for(var x = 0; x < cols; x++ ){
    line(x*cellWidth,0,x*cellWidth,height);
  }
  // draws the grid
  for(var y = 0; y < rows; y++){
    line(0, y*cellHeight, width, y*cellHeight);
  }
  if(mouseIsPressed){
    console.log(floor(mouseX/cellWidth)*cellWidth);
  }
  // retrieves the position of the cell
  // by dividing the position of the mous by the width of the cell
  // then rounding the position in order to have a whole number
  // finally multiplying it by the width of a cell will give us a position
  var posX = floor(mouseX/cellWidth)*cellWidth;
  var posY = floor(mouseY/cellHeight)*cellHeight;

  fill(255,0,0);
  // draws a red square at the computed position
  rect(posX, posY, cellWidth, cellHeight);
  //}


}

function mousePressed(){

}
