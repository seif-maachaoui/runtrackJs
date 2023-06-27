function showhide() {
    // Je commence par sélectionner l'élément avec pour id paragraph
    let paragraph = document.querySelector("#paragraph");
    
    // Si l'élément existe, alors...
    if (paragraph) { 
      paragraph.parentNode.removeChild(paragraph); // Je supprime l'élément avec pour id paragraphe de son parent
    } else {
      let newParagraph = document.createElement("p"); // Sinon je créer un nouvel élément p
      newParagraph.id = "paragraph"; // j'attribue l'id "paragraph" à l'élément p
      newParagraph.textContent = "L'important n'est pas la chute, mais l'atterrissage."; // j'insère du texte au contenu de l'élément p
  
      let article1 = document.querySelector("#article1"); // Je sélectionne l'élément article avec pour id article1
      article1.appendChild(newParagraph); // Enfin, j'attache l'élément p à l'élément article
    }
}
  