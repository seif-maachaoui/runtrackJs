// Lorsque le bouton "filtrer" est cliqué
document.getElementById("filtrer").addEventListener("click", function() {
    // On récupére les valeurs des champs du formulaire
    const id = document.getElementById("id").value;
    const nom = document.getElementById("nom").value;
    const type = document.getElementById("type").value;
    
    // On appelle la fonction de filtrage grâce aux valeurs des champs du formulaire
    filterPokemon(id, nom, type);
});

// Je commence par déclarer une fonction pour récupérer les infos des Pokémon depuis le fichier JSON
function fetchPokemonData() {
    return fetch("pokemon.json")
        .then(response => response.json())
        .catch(error => console.error("Erreur lors de la récupération des données:", error));
}

// Je créer une fonction pour filtrer les Pokémon en fonction des informations
function filterPokemon(id, nom, type) {
    fetchPokemonData().then(data => {
        // Je filtre les données 
        const filteredData = data.filter(pokemon => {
            return (!id || pokemon.id.toString() === id) &&
                   (!nom || pokemon.name.french.toLowerCase().includes(nom.toLowerCase())) &&
                   (!type || pokemon.type.includes(type));
        });
        // On afficher ensuite les Pokémon filtrés
        displayFilteredPokemon(filteredData);
    });
}

// Enfin je créer une fonction pour afficher les Pokémon filtrés
function displayFilteredPokemon(data) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = ""; // Je réinitialise le contenu
    
    // Si aucun Pokémon ne correspond aux infos, alors...
    if (data.length === 0) {
        resultContainer.innerHTML = "Aucun Pokémon ne correspond aux critères.";
        return;
    }

    // Enfin je parcours les Pokémon filtrés et j'affiche leurs infos.
    data.forEach(pokemon => {
        const pokemonInfo = document.createElement("div");
        pokemonInfo.innerHTML = `<strong>id:</strong> ${pokemon.id}<br>
        <strong>nom:</strong> ${pokemon.name.french}<br>
        <strong>type:</strong> ${pokemon.type.join(", ")}<br><hr>`;
        resultContainer.appendChild(pokemonInfo);
    });
}
