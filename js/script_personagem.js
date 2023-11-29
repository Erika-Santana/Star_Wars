async function getUserData(numero) {

    let url = `https://swapi.dev/api/people/${numero}`;

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

const container = document.querySelector(".container-personagens");

async function getUserData(num) {

    let url = `https://swapi.dev/api/people/${num}`;

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

function createCard(personagem) {
    let card = document.createElement('div');
    card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title"> ${personagem.name} </h5>
                <p> Saiba mais sobre este personagem, clicando no botão abaixo </p>
                <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${personagem.name.replace(/\s/g, "")}"> --> </a>
            </div>
        </div>
        <br>
    `;

    container.appendChild(card);
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
    `
    
    document.body.appendChild(modal);
}

for(let i = 1; i <= 2; i++) {
    getUserData(i);
}