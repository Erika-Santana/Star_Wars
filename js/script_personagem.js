async function getUserData(numero) {

    let url = `https://swapi.dev/api/people/${numero}/`;

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


for (let index = 1; index <= 81; index++) {
  
    getUserData(index);
}

const container = document.querySelector("#cardsContainer");

async function getUserData(num) {

    let url = `https://swapi.dev/api/people/${num}/`;

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
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>Altura: ${personagem.height} </p>
                <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${personagem.name.replace(/\s/g, "")}">Go somewhere</a>
            </div>
        </div>
    `;

    container.appendChild(card);
}

function createModal(personagem) {

    let modal = document.createElement('div');
    modal.innerHTML = `
    
    <div class="modal fade" id="${personagem.name.replace(/\s/g, "")}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="background-color: rgb(20 19 19); border: 3px solid #fff;">
                <div class="modal-body">
                    <div class="card-container">
                        <div class="card-content">
                            <ul>
                                <h2 class="person-name"></h2>
                                <li>
                                    <img class="image-card">
                                </li>
                                <li class="caracteristicas-personagem nome">
                                    Nome: <span></span>
                                </li>
                                <li class="caracteristicas-personagem altura">
                                    Altura: <span></span>
                                </li>
                                <li class="caracteristicas-personagem peso">
                                    Peso: <span></span>
                                </li>
                                <li class="caracteristicas-personagem cabelo">
                                    Cor do cabelo: <span></span>
                                </li>
                                <li class="caracteristicas-personagem aniversario">
                                    Data de aniversário: <span></span>
                                </li>
                                <li class="caracteristicas-personagem genero">
                                    Gênero: <span></span>
                                </li>
                                <li class="caracteristicas-personagem planeta-natal">
                                    Planeta natal: <span></span>
                                </li>
                                <li class="caracteristicas-personagem filmes">
                                    Filmes: <span></span>
                                </li>
                                <li class="caracteristicas-personagem especie">
                                    Espécie: <span></span>
                                </li>
                                <li class="caracteristicas-personagem veiculos">
                                    Veículos: <span></span>
                                </li>
                                <li class="caracteristicas-personagem starship">
                                    Espaçonaves: <span></span>
                                </li>
                            </ul>
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