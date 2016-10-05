function setup() {
  createCanvas(800,800);
  rectMode(CENTER);
  background(51); // la fonction background permet de déterminer la couleur de fond
}

function draw(){
    // les fonctions utilisant des couleurs peuvent prendre 1, 2, 3 ou 4 paramètres allant de 0 à 255
    // un seul paramètre représente un niveau de gris allant du noir (0) au blanc (255)
    fill(255);
    rect(400, 400, 300, 300);

    // 2 paramèrtres représentent le niveau de gris et l'alpha (la transparence)
    fill(0, 100);
    ellipse(400, 250, 250, 250);

    // 3 paramètres représentent respectivement le rouge, le vert et le bleu
    // le 4eme paramètre représente l'opacité (la transparence de la couleur)
    fill(255, 0, 255, 100);
    triangle(400, 250, 250, 400, 550, 400);

    // on constate ici que l'ordre dans lequel on dessine les éléments a une importance

    /** il existe de plus d'autres fonctions permettant de manipuler
      le remplissage ou le trait des formes
    **/
    // fill(*couleur*) définit la couleur de remplissage
    // noFill() supprime le remplissage
    // stroke(*couleur*) définit la couleur du trait
    // noStroke() supprime le trait

    noFill();
    stroke(0,255, 0);
    // strokeweight permet de définir l'épaisseur du trait
    strokeWeight(4);
    rect(400, 550, 100, 100);





}
