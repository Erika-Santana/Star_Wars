const container = document.querySelector(".container");
const MAX_RETRIES = 2; // Número máximo de tentativas

async function getUserData(numero, retryCount = 0) {
    try {
        let url = `https://swapi.dev/api/people/${numero}/`;
        let response = await fetch(url);

        if (response.ok) {
            let jsonUser = await response.json();
            console.log(jsonUser);
            createCard(jsonUser);
        } else {
            console.log(`Erro na chamada da API para ${url}. Status: ${response.status}`);
            if (retryCount < MAX_RETRIES) {
                console.log(`Tentando novamente (${retryCount + 1}/${MAX_RETRIES})...`);
                // Tente novamente após um curto intervalo
                await new Promise(resolve => setTimeout(resolve, 1000)); // Delay de 1 segundo
                return getUserData(numero, retryCount + 1);
            } else {
                console.log(`Número máximo de tentativas atingido para ${url}.`);
            }
        }
    } catch (error) {
        console.error("Erro durante chamada de API:", error);
    }
}

function createCard(personagem) {
    let card = document.createElement('div');
    card.className = 'card';  // Adicione uma classe para facilitar a seleção
    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title"> ${personagem.name} </h5>
            <button href="#" class="botao" data-bs-toggle="modal" data-bs-target="#${personagem.name.replace(/\s/g, "")}"> --> </button>
        </div>
    `;
    container.appendChild(card);
    createModal(personagem);
}

function createModal(personagem) {
    let modal = document.createElement('div');
    modal.innerHTML = `
        <div class="modal fade" id="${personagem.name.replace(/\s/g, "")}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="background-color: rgb(20 19 19); border: 3px solid #fff; color: white;">
                    <div class="modal-body">
                        <div class="card-container">
                            <div class="card-content">
                                    <h2 class="person-name">${personagem.name}</h2>
                                    <p class="caracteristicas-personagem altura">
                                        Altura: ${personagem.height} cm <span></span>
                                    </p>
                                    <p class="caracteristicas-personagem peso">
                                        Peso: ${personagem.mass} kg <span></span>
                                    </p>
                                    <p class="caracteristicas-personagem aniversario">
                                        Ano de nascimento: ${personagem.birth_year}<span></span>
                                    </p>
                                    <p class="caracteristicas-personagem genero">
                                        Gênero: ${personagem.gender} <span></span>
                                    </p>
                                    <p class="caracteristicas-personagem olho">
                                        Cor do olho: ${personagem.eye_color}<span></span>
                                    </p>
                                    <p class="caracteristicas-personagem cabelo">
                                        Cor do cabelo: ${personagem.hair_color}<span></span>
                                    </p>
                                    <p class="caracteristicas-personagem pele">
                                        Tom de pele: ${personagem.skin_color}<span></span>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Criar um array de promessas para todas as chamadas de API
const apiRequests = [];
for (let index = 1; index <= 82; index++) {
    apiRequests.push(getUserData(index));
}

// Aguardar que todas as promessas sejam resolvidas em paralelo
Promise.all(apiRequests)
    .then(() => {
        // Todas as chamadas de API foram concluídas
        console.log("Todas as chamadas de API foram concluídas.");
    })
    .catch(error => {
        console.error("Erro durante chamadas de API:", error);
    });

// Barra de busca funcional
function search() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let cardText = card.textContent.toLowerCase();
        card.style.display = cardText.includes(input) ? 'block' : 'none';
    });
}
