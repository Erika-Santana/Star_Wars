document.addEventListener("DOMContentLoaded", function () {
    const vehicleContainer = document.getElementById("container-veiculos");
    const urlBase = "https://swapi.dev/api/vehicles/?page=";
    let number;

    for(number = 1; number <= 4; number++)
    fetch(`${urlBase}${number}`)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(vehicle => {
                const vehicleCard = document.createElement("div");
                vehicleCard.className = "card";

                vehicleCard.innerHTML = `
                    <h2>${vehicle.model}</h2>
                    <p><strong>Fabricante:</strong> ${vehicle.manufacturer}</p>
                    <p><strong>Passageiros:</strong> ${vehicle.passengers}</p>
                    <p><strong>Valor:</strong> ${vehicle.cost_in_credits} créditos</p>
                `;

                vehicleContainer.appendChild(vehicleCard);
            });
        })
        .catch(error => console.error("Error fetching planets:", error));
});