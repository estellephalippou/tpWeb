
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

class Drawing {
  constructor() {
    this.forms = [];
  }
  paint(ctx,canvas) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);

    })
  }

}

// Classe Rectangle
class Rectangle extends Drawing {
  constructor(x, y, width, height, thickness, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.thickness = thickness;
    this.color = color;
  }

  paint(ctx) {

    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  }
}



// Classe Line
class Line extends Drawing {
  constructor(x1, y1, x2, y2, thickness, color) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.thickness = thickness;
    this.color = color;
  }

  paint(ctx) {
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
  }
}


