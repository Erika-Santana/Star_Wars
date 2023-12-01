const container = document.querySelector(".container");

async function getUserData(num) {

    let url = `https://swapi.dev/api/films/${num}/`;

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

function createCard(films) {
    let card = document.createElement('div');
    card.innerHTML = `
        <div class="card filmes" style="width: 18rem; background-color:black; border: 1px solid #ccc; ">
        <img src="img/${films.title}.jpg" class="card-img-top">
            <div class="card-body">
              
                <h5 class="card-title">${films.title}</h5>
                <p class="card-text"></p>
                <button href="#" class="botao" data-bs-toggle="modal" data-bs-target="#${films.title.replace(/\s/g, "")}"> --> </button>
            </div>
        </div>
    `;

    container.appendChild(card);
}

function createModal(films) {

    let modal = document.createElement('div');
    modal.innerHTML = `
        <div class="modal fade" id="${films.title.replace(/\s/g, "")}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content" style="background-color: rgb(20 19 19); border: 3px solid #fff; color: white;">
                  <div class="modal-body">
                      <div class="card-container">
                          <div class="card-content">
                                  <h2 class="person-name">${films.title}</h2>
                                  <p class="caracteristicas-personagem altura">
                                      Titulo: ${films.title} 
                                  </p>
                                  <p class="caracteristicas-personagem peso">
                                      Produtor: ${films.release_date} 
                                  </p>
                                  <p class="caracteristicas-personagem aniversario">
                                      Episódio ID: ${films.episode_id}
                                  </p>
                                  <p class="caracteristicas-personagem genero">
                                      Diretor: ${films.episode_id} 
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

for(let i = 1; i <= 6; i++) {
    getUserData(i);
}