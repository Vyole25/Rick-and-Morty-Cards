let url = "https://rickandmortyapi.com/api/character";

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        crearCard(data.results);
    });

let container = document.getElementById("container");

function traducirSpecies(species) {
    switch(species) {
        case 'Human': return 'Humano';
        case 'Alien': return 'Alienígena';
        default: return species;
    }
}

function crearCard(data) {
    let cardsHTML = "";

    data.forEach((personaje) => {
        cardsHTML += `
        <div class="card">
            <p class="nombre_card">${personaje.name}</p>
            <img src="${personaje.image}" alt="${personaje.name}">          
            <p class="info_card">Especie: ${traducirSpecies(personaje.species)}</p>
        </div>
        `;
    });

    container.innerHTML = cardsHTML;
}
