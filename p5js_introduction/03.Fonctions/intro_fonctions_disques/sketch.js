function setup() {
  createCanvas(800, 800);

}

function draw() {
  background(255);


  for (var posX = 0; posX < width; posX += 200) {
    for (var taille = 200; taille > 0; taille -= 20) {
      ellipse(posX, height / 2, taille, taille);

    }
  }

  for (var taille = 200; taille > 0; taille -= 20) {
    ellipse(width / 3, 0, taille, taille);

  }
  
  for (var taille = 500; taille > 0; taille -= 20) {
    ellipse(width, 0, taille, taille);

  }

}