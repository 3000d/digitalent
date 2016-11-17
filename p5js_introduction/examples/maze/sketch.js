var cols = 10,
    rows = 10;
var sz = 20;
var t = 0;
var grid = [];
var current = null;
var stack = [];

function setup() {
    createCanvas(800, 800);
    background(0);
    strokeWeight(1);
    //frameRate(1);
    cols = (width / sz);
    rows = height / sz;
    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {

            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
    grid[0].visited = true;
    current = grid[0];


}

function draw() {

    background(0);
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }
    current.highlight();
    current.visited = true;
    // STEP 1
    var next = current.checkNeighbours();
    if (next) {

        next.visited = true;
        // STEP 3
        // STEP 2
        stack.push(current);
        removeWalls(current, next);
        // STEP 4
        current = next;
    } else if (stack.length > 0) {

        current = stack.pop();
    }
}

function removeWalls(a, b) {
    // check la différence d'index
    var x = a.i - b.i;

    if (x == 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x == -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    var y = a.j - b.j;
    if (y === 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (y === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}


function mouseClicked(){
  grid.map(function(cell){
    cell.visited = false;
    cell.walls = [true,true,true,true];
  });
  i = index(floor(mouseX/rows), floor(mouseY/cols));
  grid[i].visited = true;
  current = grid[i];
  stack = [];
  background(0);
}
function index(i, j) {
    if (i < 0 || i > cols - 1 || j < 0 || j > rows - 1) {
        return -1;
    }
    return i + j * cols;

}



function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;

    this.checkNeighbours = function() {
        var neighbours = [];
        // top
        var top = grid[index(this.i, this.j - 1)];
        // right
        var right = grid[index(this.i + 1, this.j)];
        // bottom
        var bottom = grid[index(this.i, this.j + 1)];
        // left
        var left = grid[index(this.i - 1, this.j)];

        if (top && !top.visited) neighbours.push(top);
        if (right && !right.visited) neighbours.push(right);
        if (bottom && !bottom.visited) neighbours.push(bottom);
        if (left && !left.visited) neighbours.push(left);
        if (neighbours.length > 0) {
            var i = floor(random(neighbours.length));
            return neighbours[i];
        } else {
            return undefined;
        }

    }
    this.highlight = function() {
        noStroke();
        fill(100, 0, 255,100);
        rect(this.i * sz, this.j * sz, sz, sz);
    }
    this.show = function() {
        if(!this.visited )return;
        var x = this.i * sz;
        var y = this.j * sz;
        stroke(255);

        if ((this.i + this.j) % 2 == 0) {

            fill(0);
        } else {
            fill(255);
        }

        if (this.walls[0]) {
            // top
          //  line(x, y, x + sz, y);

          arc(x + sz / 2, y + sz / 2, sz, sz, -HALF_PI,0);
        }
        if (this.walls[1]) {
            // right
          // line(x + sz, y, x + sz, y + sz);

           arc(x + sz / 2, y + sz / 2, sz, sz, 0, HALF_PI);
        }
        if (this.walls[2]) {
            // bottom
          //  line(x + sz, y + sz, x, y + sz);

           arc(x + sz / 2, y + sz / 2, sz, sz, HALF_PI, PI );
        }
        if (this.walls[3]) {
            // left
            //  line(x, y + sz, x, y);

           arc(x + sz / 2, y + sz / 2, sz, sz, PI, PI+HALF_PI);
        }
        if (this.visited) {
            noStroke();
          //  fill(255, 200);
          //  rect(x, y, sz, sz);
        }

    }
}
