var cercles = [];
function setup() {
    createCanvas(800, 800);
  //  c = new Cercle(width/2, width/2, 100);
}

function draw() {
    background(255);

    for(var i = 0; i < cercles.length; i++){
      cercles[i].deplace();
      cercles[i].affiche();
      if(cercles[i].posX > width){
        cercles.splice(i,1);
      }

    }
}

function mousePressed(){
  var c = new Cercle(mouseX, mouseY, random(300));
  cercles.push(c);
}

function Cercle(_posX, _posY, _diam){
  this.diam = _diam;
  this.posX = _posX;
  this.posY = _posY;

  this.deplace = function(){
    this.posX = this.posX +100/this.diam;
  }
  this.affiche = function(){
    ellipse(this.posX, this.posY, this.diam, this.diam);
  }
}
