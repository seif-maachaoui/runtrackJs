// Je sélectionne l'élément bouton qui a pour id button
let button = document.getElementById("button");

// Je sélectionne l'élément p qui a pour id compteur
let compteurElement = document.getElementById("compteur");

// Je commence par créer une variable compteur et je l'initialise à 0
let compteur = 0;

// Déclaration de ma fonction addone
function addone() {
    // Je commence par incrémenter le compteur
    compteur++;

    //Je  vais mettre à jour le contenu de l'élément p
    compteurElement.textContent = compteur; 
}

// J'ajoute un écouteur d'événements pour détecter les clics sur le bouton par l'utilisateur
button.addEventListener("click", addone);
   


    