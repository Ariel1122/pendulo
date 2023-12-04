let pendulo;
let angulo = Math.PI / 4;
let longitud = 150;

function setup() {
  createCanvas(400, 400);
  pendulo = new Pendulo(width / 2, 0, longitud);
}

function draw() {
  background(255);

  pendulo.update();
  pendulo.display();
}
