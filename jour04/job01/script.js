// On récupère l'élément ayant comme id "button" et on écoute l'événement au click
document.getElementById("button").addEventListener("click", fetchData);

    // Je déclare une fonction fetchData
    function fetchData() {
        // Je commence par créer une variable "url" qui contient le chemin vers mon fichier "expression.txt"
        let url = "expression.txt";

        // J'utilise la fonction Fetch pour récupérer le contenu du fichier à l'URL spécifiée
        fetch(url)

        .then(response => {
            // On commence par vérifier si la requête s'est bien déroulée (status 200-299)
            // Si la réponse n'est pas "ok" (ex. erreur 404 ou 500), on affiche une erreur
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération du fichier.");
            }
            // Si tout s'est bien passé, on renvoie les données de la réponse sous forme de texte
            return response.text();
        })

        .then(data => {
            // Une fois les données du fichier sous forme de texte récupérées
            // On cible ensuite l'élément p ayant comme id "content" dans lequel on va insérer les données
            let paragraph = document.getElementById("content");

            // Ensuite on attribue le contenu du fichier texte (data) au sein du paragraphe
            paragraph.textContent = data;
        })

        .catch(error => {
            // En cas d'erreur lors de la requête Fetch (ex. problème de réseau, URL incorrecte, etc.)
            // On affiche un message d'erreur dans la console
            console.error("Une erreur s'est produite:", error);
        });
    }


