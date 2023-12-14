let t = 0; // Tiempo inicial
let dt = 0.01; // Incremento de tiempo

let pendulos = []; // Array para almacenar los objetos Pendulo

function setup() {
  createCanvas(400, 400);

  // Punto de origen común
  let x = width / 2;
  let y = 0;

  // Colores específicos para cada péndulo
  let colores = [color(148, 0, 211), color(255, 0, 0), color(255, 255, 0)];

  // Crear 3 péndulos con diferentes velocidades y agregarlos al array
  for (let i = 0; i < 3; i++) {
    let velocidad = map(i, 0, 3, 1.39, 2.39); // Mapear velocidades de forma manual
    let longitud = 150;
    let angulo = 1.39;
    let col = colores[i];

    pendulos[i] = new Pendulo(x, y, longitud, angulo, velocidad, col);
  }
}

function draw() {
  background(255);

  // Actualizar y mostrar cada péndulo en el array
  for (let i = 0; i < pendulos.length; i++) {
    pendulos[i].update();
    pendulos[i].display();
  }

  t += dt; // Incrementar el tiempo
}

//   pendulo1 = new Pendulo(width / 2, 0, 150, 1.39, color(255, 0, 0));
