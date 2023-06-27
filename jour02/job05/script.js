
function scrolling(){

    // J'ajoute un écouteur d'événement pour l'événement "scroll" (défilement)
    window.addEventListener("scroll", function() {

    // Je récupère la hauteur de la fenêtre du navigateur
    let window_height = window.innerHeight;
  
    // Je récupère la hauteur totale du document HTML
    let document_height = document.documentElement.scrollHeight;
  
    // Je récupère la position de défilement actuelle
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
  
    // Je calcule le pourcentage de défilement en utilisant la position de défilement et les dimensions de la fenêtre et du document
    let scrollPercentage = (scrollTop / (document_height - window_height)) * 100;
        console.log(scrollPercentage);
    // Je sélectionne l'élément footer à l'aide de document.querySelector("footer") et je définis sa couleur de fond en utilisant le pourcentage de défilement
    document.querySelector("footer").style.backgroundColor = `hsl(${scrollPercentage}, 100%, 50%)`;
  });
}

// J'appelle ma fonction scrolling()
scrolling();
  