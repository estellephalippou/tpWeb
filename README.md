TP Web : Javascript et HTML5 d'Ikram Rehahla et Estelle Phalippou


## 1. Procédure pour lancer les TPs

Ouvrir le fichier `canvas.html` dans le navigateur de votre choix.

## 2. Déroulement du TP

1. **Interaction sur le canvas** :
   - Cliquer-glisser pour dessiner la forme.
   - Les formes sont enregistrées dans le `model` et affichées dans la liste (`view`).
2. **Choix de la forme** : dans la barre supérieure, sélectionner `Rectangle` ou `Line`.
3. **Paramétrage** :
   - Largeur du trait via `spinnerWidth`.
   - Couleur via le sélecteur `input[type=color]`.
4. **Liste des formes** :
   - Le `controller` synchronise le modèle et la vue.
   - `interaction.js` gère les événements souris / clavier.
