/*
* Introduction à l'utilisation des arrays
* 1. mot hardcodé
* 2. index de l'array en dur
* 3. index dans une variable
* 4. mousePressed pour augmenter l'index
* 5. check l'index avec un nombre en dur
* 6. Array length
*/
var mots =
  ["coeur", "bisous", "chaton",
  "nuage", "licorne", "fleur",
  "arc-en-ciel", "amour"
  ];
var index = 0;
function setup() {
   createCanvas(800, 800);
   noFill();
}

function draw() {
  background(0);

  fill(255);

  textSize(80);
  for(var i=0; i < mots.length; i = i + 1 ){
    text(mots[i], 20, i*100+40);
  }



  // check index

  // todo : montrer ce qui se passe quand on hardcode le nombre d'éléments
  // ajouter
}


function mousePressed(){
  index = index + 1;
  console.log(index);
  if(index > mots.length-1){
    index = 0;
  }
}
