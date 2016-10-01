/**
 *  La création de fonctions en javascript 
 * 
 **/

function setup() {
  // une fonction peut être appelée durant l'exécution du code
  var resultat = additionner(10, 10);
  // affiche 20
  print(resultat);
  var resultat = multiplier(20,2);
  // affiche 40
  print(resultat);
  
}
/**
 * La fonction `additionner` prend deux paramètres (a et b)
 * et retourne leur somme
 * [note: additionner est un nom arbitraire, la fonction peut s'appeler comme on veut]
 **/
function additionner(a, b) {

  var r = a + b;
  // une fonction peut renvoyer une valeur
  // pour ce faire, on utilise le mot clé `return` suivi de la valeur (ou la variable)
  return r;
}

function multiplier(a, b) {
  var r = a * b;
  return r;
}