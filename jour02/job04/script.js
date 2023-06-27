// Je sélectionne l'élément textarea qui a pour id keylogger
let keylogger = document.getElementById("keylogger");

// J'ajoute un écouteur d'événements pour détecter les frappes de clavier
document.addEventListener("keydown", function(event) {

  // Je fais en sorte que la touche pressée soit récupéré en minuscule  
  let key = event.key.toLowerCase(); 

  // Si la touche pressée fait partie de l'alphabet, alors...
  if (/[a-z]/.test(key)) {
    
    //Si l'élément actif de la page n'est pas le champ de texte, alors...
    if (document.activeElement !== keylogger) {
      // J'ajoute la lettre une fois dans le champ
      keylogger.value += key;
    } else {
      // Sinon j'ajoute la lettre deux fois dans le champ
      keylogger.value += key + key;
    }

  }
});