async function getUserData(numero) {

    let url = `https://swapi.dev/api/species/${numero}`;

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

const container = document.querySelector(".container-especies");

async function getUserData(num) {

    let url = `https://swapi.dev/api/species/${num}`;

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

function createCard(species) {
    let card = document.createElement('div');
    card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title"> ${species.name} </h5>
                <p> Saiba mais sobre este species, clicando no botão abaixo </p>
                <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${species.name.replace(/\s/g, "")}"> --> </a>
            </div>
        </div>
        <br>
    `;

    container.appendChild(card);
}

function createModal(species) {

    let modal = document.createElement('div');
    modal.innerHTML = `
    
    <div class="modal fade" id="${species.name.replace(/\s/g, "")}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="background-color: rgb(20 19 19); border: 3px solid #fff; color: white;">
                <div class="modal-body">
                    <div class="card-container">
                        <div class="card-content">
                                <h2 class="person-name">${species.name}</h2>
                                <p class="caracteristicas-species classificação">
                                    Classificação: ${species.classification} <span></span>
                                </p>
                                <p class="caracteristicas-species altura">
                                    Altura comum: ${species.average_height} cm <span></span>
                                </p>
                                <p class="caracteristicas-species tempodevida">
                                    Tempo de vida: ${species.average_lifespan}<span></span>
                                </p>
                                <p class="caracteristicas-species idioma">
                                    Idioma falado: ${species.language} <span></span>
                                </p>
                                <p class="caracteristicas-species olho">
                                    Cores do olho: ${species.eye_colors}<span></span>
                                </p>
                                <p class="caracteristicas-species cabelo">
                                    Cores de cabelo: ${species.hair_colors}<span></span>
                                </p>
                                <p class="caracteristicas-species pele">
                                    Tons de pele: ${species.skin_colors}<span></span>
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