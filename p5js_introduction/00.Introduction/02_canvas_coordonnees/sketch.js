function setup() {
  // un canvas est l'élément dans lequel on va dessiner
  // la `fonction` createCanvas(l,h) permet de définir la taille de ce canvas à l'écran

  createCanvas(800,500); // va créer un canvas de 800 pixels de larges sur 500 pixels de haut

  // par défaut, le système de coordonnées démarre en haut à gauche,
  // c'est la valeur `0,0` => 0 pixel en largeur; 0 pixels en hauteur

  ellipse(0,0, 100,100); // dessine un cercle de 100 pixels de diamètre dont le centre est à 0,0
}
