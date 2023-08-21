// On récupère l'élément ayant comme id "btn" et on écoute l'événement au click
document.getElementById("btn").addEventListener("click", function() {

    // Une chaîne de caractère au format JSON
    let jsonString = `{
        "name": "La Plateforme_",
        "address": "8 rue d'hozier",
        "city": "Marseille",
        "nb_staff": "11",
        "creation": "2019"
    }`;
    
    // Le mot-clé à rechercher
    let key = "city";
    
    // J'appelle ma fonction jsonValueKey pour obtenir la valeur de la clé
    let value = jsonValueKey(jsonString, key);
      
    // Je récupère l'élément p avec pour id "content"
    let contentElement = document.getElementById("content");
      
    // Je met à jour le contenu de ma variable contentElement avec la valeur adéquate
    contentElement.textContent = value;
});

// Je déclare une fonction jsonValueKey
function jsonValueKey(jsonString, key) {

    try {
        //Conversion de la chaîne de caractère JSON en un objet
        let parsedJson = JSON.parse(jsonString);

        // Dans le cas ou la variable parsedJson est un objet et qu'il n'est pas vide
        if (typeof parsedJson === 'object' && parsedJson !== null) {
            //Si la clé est comprise dans dans l'objet parsedJson alors..
            if (key in parsedJson) {
                return parsedJson[key];
                
            } 
            //Sinon retourne ce message
            else {
                return "Clé non trouvée";
            }

        } else {
            return "Le format JSON n'est pas valide";
        }

    } catch (error) {
        return "Erreur de parsing JSON";
    }
}
