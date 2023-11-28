document.addEventListener("DOMContentLoaded", function () {
    const starshipContainer = document.getElementById("container-naves");
    const urlBase = "https://swapi.dev/api/starships/?page=";
    let number;

    for (number = 1; number <= 4; number++) {
        fetch(`${urlBase}${number}`)
            .then(response => response.json())
            .then(data => {
                data.results.forEach((starship, index) => {
                    const starshipCard = document.createElement("div");
                    starshipCard.className = "card";
                    starshipCard.innerHTML = `
                        <h2>${starship.name}</h2>
                        <p><strong>Modelo:</strong> ${starship.model}</p>
                        <p><strong>Manufaturador:</strong> ${starship.manufacturer}</p>
                        <p><strong>Custo:</strong> ${starship.cost_in_credits} créditos</p>
                        <p><strong>Tamanho:</strong> ${starship.length} m</p>
                        <button onclick="openModal(${index})">Abrir modal</button>
                    `;

                    starshipContainer.appendChild(starshipCard);
                });
            })
            .catch(error => console.error("Error fetching starships:", error));
    }
});

var modal = document.getElementById("myModal");

function openModal(index) {
    fetch(`https://swapi.dev/api/starships/${index + 2}/`)
        .then(response => response.json())
        .then(starship => {
            document.getElementById("modalContent").innerHTML = `
                <h2>${starship.name}</h2>
                <p><strong>Modelo:</strong> ${starship.model}</p>
                <p><strong>Manufaturador:</strong> ${starship.manufacturer}</p>
                <p><strong>Custo:</strong> ${starship.cost_in_credits} créditos</p>
                <p><strong>Tamanho:</strong> ${starship.length} m</p>
            `;
            modal.style.display = "block";
        })
        .catch(error => console.error("Error fetching starship details:", error));
}

function closeModal() {
    modal.style.display = "none";
}

var span = document.getElementsByClassName("close")[0];
span.onclick = closeModal();

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

