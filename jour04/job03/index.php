<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="script.js" defer></script>
        <title>Pokemon</title>
    </head>

        <body>
            <form id="FindPokemon">
                <label for="id">id:</label>
                <input type="text" id="id" name="id"><br><br>
                
                <label for="nom">nom:</label>
                <input type="text" id="nom" name="nom"><br><br>
                
                <label for="type">type:</label>
                <select id="type" name="type">
                    <option value="">Sélectionner un type</option>
                    <option value="Grass">Grass</option>
                    <option value="Poison">Poison</option>
                    <option value="Flying">Flying</option>
                    <option value="Fire">Fire</option>
                    <option value="Water">Water</option>
                    <option value="Normal">Normal</option>
                    <option value="Bug">Bug</option>
                    <option value="Ground">Ground</option>
                    <option value="Rock">Rock</option>
                    <option value="Electric">Electric</option>
                    <option value="Fairy">Fairy</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Psychic">Psychic</option>
                    <option value="Steel">Steel</option>
                    <option value="Ice">Ice</option>
                    <option value="Ghost">Ghost</option>
                    <option value="Dragon">Dragon</option>
                </select><br><br>
                <input type="button" value="Filtrer" id="filtrer">
            </form>

        <div id="result"></div>

    </body>
</html>