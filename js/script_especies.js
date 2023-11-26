document.addEventListener("DOMContentLoaded", function () {
    const speciesContainer = document.getElementById("container-especies");
    const urlBase = "https://swapi.dev/api/species/?page=";
    let number;

    for(number = 1; number <= 4; number++)
    fetch(`${urlBase}${number}`)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(specie => {
                const speciesCard = document.createElement("div");
                speciesCard.className = "card";

                speciesCard.innerHTML = `
                    <h2>${specie.name}</h2>
                    <p><strong>Classificação:</strong> ${specie.classification}</p>
                    <p><strong>Cor da pele:</strong> ${specie.skin_colors}</p>
                    <p><strong>Altura:</strong> ${specie.average_height} cm</p>
                    <p><strong>Lingua:</strong> ${specie.language}</p>
                `;

                speciesContainer.appendChild(speciesCard);
            });
        })
        .catch(error => console.error("Error fetching species:", error));
});
