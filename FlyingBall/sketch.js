// déclaration et initialisation
// variable globale
let x = 25;

// function setup()
// executée 1 seul fois 
// initialisation du canvas
function setup() {
  createCanvas(400, 400);
}

// function draw()
// exécutée en boucle
// Afin d'offrir l'effet "frame"
// à chaque "frame" l'affichage est mis à jour
function draw() {
  background(220);
  circle(x, 200, 50);
  x = x + 3;
}
