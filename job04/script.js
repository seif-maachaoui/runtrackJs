// Vérifie si une année est bissextile
function bisextile(année) {
    if (année % 4 === 0 && année % 100 !== 0) {
        console.log("L'année " + année + " est bissextile.");
    } else {
        console.log("L'année " + année + " n'est pas bissextile.");
    }
}

// Fonction appelée lors du clic sur le bouton vérifier, qui est présent dans le HTML
function checkBisextile() {
    var annéeInput = document.getElementById("année");
    var année = parseInt(annéeInput.value);

    bisextile(année); // j'appelle ma fonction bisextile 
}