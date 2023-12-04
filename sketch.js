let t = 0; // Tiempo inicial
let dt = 0.01; // Incremento de tiempo

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  let angle = (Math.PI / 4) * cos(1.39 * t); // Calcular el ángulo en función del tiempo

  let pendulo = new Pendulo(width / 2, 0, 150, angle, color(255, 0, 0));
  pendulo.display();

  t += dt; // Incrementar el tiempo
}
