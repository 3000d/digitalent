var taille = 400;
function setup() {
  createCanvas(800,800);

}

function draw(){
  background(255);
  line(width/2,0, width/2, height);
  line(0, height/2, width, height/2);

  if(mouseX < width/2){
    // le pointeur est à gauche
    if(mouseY < height/2){
      // le pointeur est au dessus
      fill(255,0,0);
      rect(0,0, taille, taille);
    }else{
      // le pointeur est en dessous
      fill(255,255,0);
      rect(0, height/2, taille, taille);
    }
  }else{
      // le pointeur est à droite
      if(mouseY < height/2){
        // le pointeur est au dessus
        fill(0,0,255);
        rect(width/2, 0, taille, taille);
      }else{
        // le pointeur est en dessous
        fill(0,255, 0);
        rect(width/2, height/2, taille, taille);
      }
  }
}

function sourisAuDessus(){

  if(mouseY < height/2){
    return true;
  }else{
    return false;
  }
}
