// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

class Drawing {
  constructor() {
    this.forms = [];
  }
  paint(ctx, canvas) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });

  }

  getForms() {
    return this.forms;
  }

  addForm(form) {
    this.forms.push(form);
  }
}


// Classe Rectangle
class Rectangle extends Drawing {
  constructor(x, y, width, height, thickness, color) {
    super();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.thickness = thickness;
    this.color = color;
  }

  getInitX() {
    return this.x;
  }

  getInitY() {
    return this.y;
  }

  getFinalX() {
    return this.x + this.width;
  }

  getFinalY() {
    return this.y + this.height;
  }

  paint(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  }
}



// Classe Line
class Line extends Drawing {
  constructor(x1, y1, x2, y2, thickness, color) {
    super();
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.thickness = thickness;
    this.color = color;
  }

  getInitX() {
    return this.x1;
  }

  getInitY() {
    return this.y1;
  }

  getFinalX() {
    return this.x2;
  }

  getFinalY() {
    return this.y2
  }

  paint(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);

    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}


