async function getUserData(numero) {
    let url = `https://swapi.dev/api/vehicles/${numero}`;
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

const container = document.querySelector(".container");
async function getUserData(num) {
    let url = `https://swapi.dev/api/vehicles/${num}`;
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

function createCard(vehicle) {
    let card = document.createElement('div');
    card.innerHTML = `
        <div class="card">
            <div class="card-body">
            <h5 class="card-title"> ${vehicle.name} </h5>
            <button href="#" class="botao" data-bs-toggle="modal" data-bs-target="#${vehicle.name.replace(/\s/g, "")}"> --> </button>
            </div>
        </div>
    `;
    container.appendChild(card);
}

function createModal(vehicle) {
    let modal = document.createElement('div');
    modal.innerHTML = `
    <div class="modal fade" id="${vehicle.name.replace(/\s/g, "")}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="background-color: rgb(20 19 19); border: 3px solid #fff; color: white;">
                <div class="modal-body">
                    <div class="card-container">
                        <div class="card-content">
                                <h2 class="vehicle-name">${vehicle.name}</h2>
                                <p class="caracteristicas-vehicle modelo">
                                    Modelo: ${vehicle.model} <span></span>
                                </p>
                                <p class="caracteristicas-vehicle valor">
                                    Valor: ${vehicle.cost_in_credits} créditos <span></span>
                                </p>
                                <p class="caracteristicas-vehicle fabricante">
                                    Fabricante: ${vehicle.manufacturer} <span></span>
                                </p>
                                <p class="caracteristicas-vehicle classificação">
                                    Classificação: ${vehicle.vehicle_class} <span></span>
                                </p>
                                <p class="caracteristicas-vehicle tripulação">
                                    Capacidade de tripulantes: ${vehicle.crew} <span></span>
                                </p>
                                <p class="caracteristicas-vehicle suprimentos">
                                    Capacidade de suprimentos: ${vehicle.consumables} <span></span>
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