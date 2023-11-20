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

