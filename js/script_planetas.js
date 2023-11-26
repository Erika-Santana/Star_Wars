document.addEventListener("DOMContentLoaded", function () {
    const planetContainer = document.getElementById("container-planeta");
    const urlBase = "https://swapi.dev/api/planets/?page=";
    let number;

    for(number = 1; number <= 6; number++)
    fetch(`${urlBase}${number}`)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(planet => {
                const planetCard = document.createElement("div");
                planetCard.className = "card";

                planetCard.innerHTML = `
                    <h2>${planet.name}</h2>
                    <p><strong>Terreno:</strong> ${planet.terrain}</p>
                    <p><strong>População:</strong> ${planet.population}</p>
                `;

                planetContainer.appendChild(planetCard);
            });
        })
        .catch(error => console.error("Error fetching planets:", error));
});