let t = 0; // Tiempo inicial
let dt = 0.01; // Incremento de tiempo

let pendulos = []; // Array para almacenar los objetos Pendulo
let pendulos2 = [];

function setup() {
  createCanvas(900, 900);

  // Punto de origen común
  let x = width / 2;
  let y = 0;
  // Longitudes específicas para cada péndulo
  let long = [
    480, 455, 430, 405, 380, 355, 330, 305, 280, 255, 230, 205, 180, 155, 130,
  ];
  //----------------------------------------------------------------
  for (let i = 0; i < 15; i++) {
    let velocidad = map(i, 0, 2, 1.39, 1.45);
    let longitud = long[i];
    let angulo = 1.39;
    let col = lerpColor(color(0, 0, 0), color(255, 0, 0), i / 5);

    pendulos[i] = new Pendulo(x, y, longitud, angulo, velocidad, col);
  }
  for (let i = 0; i < 15; i++) {
    let velocidad = map(i, 0, 2, 1.39, 1.45);
    let longitud = long[i];
    let angulo = -1.39;
    let col = lerpColor(color(0, 255, 103), color(255, 255, 0), i / 5);

    pendulos2[i] = new Pendulo(x, y, longitud, angulo, velocidad, col);
  }
}

function draw() {
  background(255);

  // Actualizar y mostrar cada péndulo en el array
  for (let i = 0; i < pendulos.length; i++) {
    pendulos[i].update();
    pendulos[i].display();
  }
  for (let i = 0; i < pendulos.length; i++) {
    pendulos2[i].update();
    pendulos2[i].display();
  }

  t += dt; // Incrementar el tiempo
}

//   pendulo1 = new Pendulo(width / 2, 0, 150, 1.39, color(255, 0, 0));
