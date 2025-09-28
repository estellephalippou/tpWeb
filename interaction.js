
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  this.coordonneesInit = { x: 0, y: 0 };
  this.coordonneesFinal = { x: 0, y: 0 };

 
  this.isDragged = false;

 this.pression = function (evt) {
    this.coordonneesInit = getMousePosition(canvas, evt);
    this.isDragged = true;
    if (interactor?.onInteractionStart) {
      interactor.onInteractionStart(this);
    }
    console.log("pression: "  + this.coordonneesFinal.x +" "+parseInt(this.coordonneesFinal.y));
  }.bind(this);

  this.deplacement = function (evt) {
    if (!this.isDragged) return;
    this.coordonneesFinal = getMousePosition(canvas, evt);
    if (interactor?.onInteractionUpdate) {
      interactor.onInteractionUpdate(this);
    }
    console.log("deplacement: " + this.coordonneesFinal.x +" "+parseInt(this.coordonneesFinal.y));
  }.bind(this);

  this.relachement = function (evt) {
    if (!this.isDragged) return;
    this.coordonneesFinal = getMousePosition(canvas, evt);
    this.isDragged = false;
    if (interactor?.onInteractionEnd) {
      interactor.onInteractionEnd(this);
    }
    console.log("relachement: " + this.coordonneesFinal.x +" "+parseInt(this.coordonneesFinal.y));
  }.bind(this);

  canvas.addEventListener('mousedown', this.pression);
  canvas.addEventListener('mousemove', this.deplacement);
  canvas.addEventListener('mouseup', this.relachement);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};

