async function getUserData(numero) {
    let url = `https://swapi.dev/api/starships/${numero}`;
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

const container = document.querySelector(".container-naves");
async function getUserData(num) {
    let url = `https://swapi.dev/api/starships/${num}`;
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

function createCard(starship) {
    let card = document.createElement('div');
    card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title"> ${starship.name} </h5>
            <p> Saiba mais sobre esta nave, clicando no botão abaixo </p>
            <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${starship.name.replace(/\s/g, "")}"> --> </a>
            </div>
        </div>
        <br>
    `;
    container.appendChild(card);
}

function createModal(starship) {
    let modal = document.createElement('div');
    modal.innerHTML = `
    <div class="modal fade" id="${starship.name.replace(/\s/g, "")}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="background-color: rgb(20 19 19); border: 3px solid #fff; color: white;">
                <div class="modal-body">
                    <div class="card-container">
                        <div class="card-content">
                                <h2 class="starship-name">${starship.name}</h2>
                                <p class="caracteristicas-starship modelo">
                                    Modelo: ${starship.model} <span></span>
                                </p>
                                <p class="caracteristicas-starship valor">
                                    Valor: ${starship.cost_in_credits} créditos <span></span>
                                </p>
                                <p class="caracteristicas-starship fabricante">
                                    Fabricante: ${starship.manufacturer} <span></span>
                                </p>
                                <p class="caracteristicas-starship classificação">
                                    Classificação: ${starship.starship_class} <span></span>
                                </p>
                                <p class="caracteristicas-starship tripulação">
                                    Capacidade de tripulantes: ${starship.crew} <span></span>
                                </p>
                                <p class="caracteristicas-starship suprimentos">
                                    Capacidade de suprimentos: ${starship.consumables} <span></span>
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