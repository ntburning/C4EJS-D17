const poke_container = document.getElementById('poke_container');
const pokemons_number = 54;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemons_number; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {

    const poke_types = pokemon.types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const color = colors[type];

    const pokeInnerHTML = `
            <div class="pokemon" style="background-color: ${colors[type]};">
                <div class="img-container">
                    <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id
        }.png" alt="${name}" />
                </div>
                <div class="info" data-id="${pokemon.id}">
                    <span class="number">#${pokemon.id
            .toString()
            .padStart(3, '0')}</span>
                    <h3 class="name">${name}</h3>
                    <small class="type">Type: <span>${type}</span></small>
                </div>
            </div>`;

    poke_container.insertAdjacentHTML('beforeend', pokeInnerHTML);
}



function showInfo() {
    let pokemon = document.querySelectorAll('.pokemon');
    console.log(pokemon)
    for (let i = 0; i < pokemon.length; i++) {
        pokemon[i].addEventListener('click', () => {
            let idPokemon = pokemon[i].children[1].attributes[1].value;
            poke_container.innerHTML = "";
            getPokemon(idPokemon);
        })
    }
}

async function main() {
    await fetchPokemons();
    await showInfo();

}

// main();


let data = [
    {
        name: 'Pikachu',
        skills: [
            {
                move: { name: "pay-day" }
            },
            {
                move: { name: "scratch" }
            }
        ],
        sprites: {
            other: {
                "official-artwork": {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/…ter/sprites/pokemon/other/official-artwork/52.png"
                }
            }
        }
    },
    {
        name: 'Pikalong',
        skills: [
            {
                move: { name: "pay-day" }
            },
            {
                move: { name: "scratch" }
            }
        ],
        sprites: {
            other: {
                "official-artwork": {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
                }
            }
        }
    }
]


function createPokemonCard(list_data) {
    for (let i = 0; i < list_data.length; i++) {
        let pokemonInnerHtml = `
            <div class="pokemon">
                <div class="img-container">
                    <img src="${list_data[i].sprites.other["official-artwork"].front_default}" />
                </div>
                <div class="info" data-id="">
                    <span class="number">#${i
                .toString()
                .padStart(3, '0')}</span>
                    <h3 class="name">${list_data[i].name}</h3>
                    <small class="type">Type: <span>${list_data[i].skills[1]}</span></small>
                </div>
            </div>`;
        poke_container.insertAdjacentHTML('beforeend', pokemonInnerHtml)
    }
}

fetchData();