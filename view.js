Rectangle.prototype.paint = function(ctx) {
  //TODO Manager color
  ctx.beginPath();
  ctx.lineWidth = this.thickness;
  ctx.strokeStyle = this.color;
  ctx.rect(this.x, this.y, this.width, this.height);
  ctx.stroke();
};

Line.prototype.paint = function(ctx) {
  //TODO Manager color
  ctx.beginPath();
  ctx.lineWidth = this.thickness;
  ctx.strokeStyle = this.color;
  ctx.moveTo(this.getInitX(), this.getInitY());
  ctx.lineTo(this.getFinalX(), this.getFinalY());
  ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
  //console.log(this.getForms());
  ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.getForms().forEach(function (eltDuTableau) {
    // now fill the canvas
    eltDuTableau.paint(ctx);
  });
};

function updateShapeList(drawing) {
  const shapeList = document.getElementById("shapeList");
  shapeList.innerHTML = "";

  drawing.getForms().forEach((shape, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = shape instanceof Rectangle 
      ? `Rectangle (${shape.x}, ${parseInt(shape.y)}, ${shape.width}, ${shape.height})` 
      : `Line (${shape.x1}, ${parseInt(shape.y1)}, ${shape.x2}, ${parseInt(shape.y2)})`;    


    // Ajouter un bouton de suppression avec une icône
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "btn btn-default";

    const icon = document.createElement("span");
    icon.className = "glyphicon glyphicon-remove-sign";
    deleteButton.appendChild(icon);

    // Ajouter l'événement de suppression
    deleteButton.addEventListener("click", () => {
      drawing.getForms().splice(index, 1); // Supprime la forme du tableau
      drawing.paint(ctx, canvas); // Redessine le canvas
      updateShapeList(drawing); // Met à jour la liste
    });

    listItem.appendChild(deleteButton);
    shapeList.appendChild(listItem);
  });
}
