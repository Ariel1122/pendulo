class Pendulo {
  constructor(x, y, l, a, col) {
    this.origin = createVector(x, y);
    this.length = l;
    this.angle = a;
    this.color = col; // Nuevo parámetro para el color
  }

  display() {
    let x = this.length * sin(this.angle);
    let y = this.length * cos(this.angle);
    let position = createVector(x, y);
    position.add(this.origin);

    stroke(0);
    strokeWeight(2);
    line(this.origin.x, this.origin.y, position.x, position.y);

    fill(this.color); // Usar el color proporcionad
    ellipse(position.x, position.y, 20, 20);
  }
}
