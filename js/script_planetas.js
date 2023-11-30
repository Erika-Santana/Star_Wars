const container = document.querySelector(".container");
const MAX_RETRIES = 2; 

async function getUserData(numero, retryCount = 0) {
    try {
        let url = `https://swapi.dev/api/planets/${numero}/`;
        let response = await fetch(url);

        if (response.ok) {
            let jsonUser = await response.json();
            console.log(jsonUser);
            createCard(jsonUser);
        } else {
            console.log(`Erro na chamada da API para ${url}. Status: ${response.status}`);
            if (retryCount < MAX_RETRIES) {
                console.log(`Tentando novamente (${retryCount + 1}/${MAX_RETRIES})...`);
                await new Promise(resolve => setTimeout(resolve, 1000)); 
                return getUserData(numero, retryCount + 1);
            } else {
                console.log(`Número máximo de tentativas atingido para ${url}.`);
            }
        }
    } catch (error) {
        console.error("Erro durante chamada de API:", error);
    }
}


function createCard(planet) {
    let card = document.createElement('div');
    card.innerHTML = `
        <div class="card">
            <div class="card-body">
            <h5 class="card-title"> ${planet.name} </h5>
            <button href="#" class="botao" data-bs-toggle="modal" data-bs-target="#${planet.name.replace(/\s/g, "")}"> --> </button>
            </div>
        </div>
    `;
    container.appendChild(card);
}

function createModal(planet) {
    let modal = document.createElement('div');
    modal.innerHTML = `
    <div class="modal fade" id="${planet.name.replace(/\s/g, "")}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="background-color: rgb(20 19 19); border: 3px solid #fff; color: white;">
                <div class="modal-body">
                    <div class="card-container">
                        <div class="card-content">
                                <h2 class="planet-name">${planet.name}</h2>
                                <p class="caracteristicas-planet clima">
                                    Clima: ${planet.climate} <span></span>
                                </p>
                                <p class="caracteristicas-planet população">
                                    População: ${planet.population} créditos <span></span>
                                </p>
                                <p class="caracteristicas-planet gravidade">
                                    Força da gravidade: ${planet.gravity} <span></span>
                                </p>
                                <p class="caracteristicas-planet terreno">
                                    Terreno: ${planet.terrain} <span></span>
                                </p>
                                <p class="caracteristicas-planet rotação">
                                    Tempo de rotação: ${planet.rotation_period} horas <span></span>
                                </p>
                                <p class="caracteristicas-planet órbita">
                                    Período de órbita: ${planet.orbital_period} dias <span></span>
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `   
    document.body.appendChild(modal);
}

const apiRequests = [];
for (let index = 1; index <= 60; index++) {
    apiRequests.push(getUserData(index));
}

Promise.all(apiRequests)
    .then(() => {
        console.log("Todas as chamadas de API foram concluídas.");
    })
    .catch(error => {
        console.error("Erro durante chamadas de API:", error);
    });

function search() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let cardText = card.textContent.toLowerCase();
        card.style.display = cardText.includes(input) ? 'block' : 'none';
    });
}
