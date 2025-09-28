var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.ctx = ctx;
	this.drawing = drawing;
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById("butRect").addEventListener("click", () => {
		this.currEditingMode = editingMode.rect;
	});

	document.getElementById("butLine").addEventListener("click", () => {
		this.currEditingMode = editingMode.line;
	});

	document.getElementById("spinnerWidth").addEventListener("change", (event) => {
		this.currLineWidth = parseInt(event.target.value, 10);
	});

	document.getElementById("colour").addEventListener("change", (event) => {
		this.currColour = event.target.value;
	});

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd


	Pencil.prototype.onInteractionStart = function (dnd) {
		// console.log(this.currEditingMode);
		if (this.currEditingMode === editingMode.rect) {
			this.currentShape = new Rectangle(
				dnd.coordonneesInit.x,
				dnd.coordonneesInit.y,
				0, // largeur initiale
				0, // hauteur initiale
				
				this.currLineWidth,
				this.currColour
			);
		} else if (this.currEditingMode === editingMode.line) {
			this.currentShape = new Line(
				dnd.coordonneesInit.x,
				dnd.coordonneesInit.y,
				dnd.coordonneesInit.x, // x2 initial
				dnd.coordonneesInit.y, // y2 initial

				this.currLineWidth,
				this.currColour
			);
		}
	};

	Pencil.prototype.onInteractionUpdate = function (dnd) {
		// console.log(this.currentShape); 
		if (this.currentShape instanceof Rectangle) {
			this.currentShape.width = dnd.coordonneesFinal.x - dnd.coordonneesInit.x;
			this.currentShape.height = dnd.coordonneesFinal.y - dnd.coordonneesInit.y;
			// console.log("width: " + this.currentShape.width);
			// console.log("height: " + this.currentShape.height);
		} else if (this.currentShape instanceof Line) {
			this.currentShape.x2 = dnd.coordonneesFinal.x;
			this.currentShape.y2 = dnd.coordonneesFinal.y;
		}

		// Redessine le canvas pour afficher la forme en cours de dessin
		this.drawing.paint(this.ctx, canvas);
		this.currentShape.paint(this.ctx);
	};

	Pencil.prototype.onInteractionEnd = function (dnd) {
		this.drawing.addForm(this.currentShape);
		this.drawing.paint(this.ctx, canvas);
		updateShapeList(this.drawing); 
		this.currentShape = null; // Réinitialise la forme courante
	}
};
