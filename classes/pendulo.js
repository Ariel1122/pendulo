class Pendulo {
  constructor(x, y, l) {
    this.origin = createVector(x, y);
    this.position = createVector();
    this.length = l;
    this.angle = Math.PI / 4;
    this.aVelocity = 0.0;
    this.aAcceleration = 0.0;
    this.damping = 0.995; // Factor de amortiguamiento
  }

  update() {
    const gravedad = 0.4;
    const fuerzaPendulo = ((-1 * gravedad) / this.length) * sin(this.angle);
    this.aAcceleration = fuerzaPendulo;
    this.aVelocity += this.aAcceleration; // Incrementar la velocidad
    this.aVelocity *= this.damping; // Aplicar amortiguamiento
    this.angle += this.aVelocity; // Incrementar el ángulo
  }

  display() {
    this.position.set(
      this.length * sin(this.angle),
      this.length * cos(this.angle)
    );
    this.position.add(this.origin);

    stroke(0);
    strokeWeight(2);
    line(this.origin.x, this.origin.y, this.position.x, this.position.y);
    fill(175);
    ellipse(this.position.x, this.position.y, 20, 20);
  }
}
