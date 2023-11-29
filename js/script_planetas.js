async function getUserData(numero) {
    let url = `https://swapi.dev/api/planets/${numero}`;
    let response = await fetch(url);

    if(response.ok) {
        let jsonUser = await response.json();
        console.log(jsonUser);
        showUserData(jsonUser);
    }
    else {
        console.log("ERRO API");
    }
};

function showUserData(name){
    console.log(name.name);
}


for (let index = 1; index <= 100; index++) {
    getUserData(index);
}

const container = document.querySelector(".container-planeta");
async function getUserData(num) {
    let url = `https://swapi.dev/api/planets/${num}`;
    let response = await fetch(url);

    if(response.ok) {
        let jsonUser = await response.json();
        createCard(jsonUser);
        createModal(jsonUser);
    }   
    else {
        console.log("ERRO API");
    }
}

function createCard(planet) {
    let card = document.createElement('div');
    card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title"> ${planet.name} </h5>
            <p> Saiba mais sobre este planetas, clicando no botão abaixo </p>
            <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${planet.name.replace(/\s/g, "")}"> --> </a>
            </div>
        </div>
        <br>
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

for(let i = 1; i <= 2; i++) {
    getUserData(i);
}