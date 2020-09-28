const url = "https://pokeapi.co/api/v2/pokemon/ditto"

const img = document.getElementById("show_pokemon")

async function pokemon(){
    const res = await fetch(url);
    const data = await res.json()
    const url_image = data.sprites.front_default

    img.src = url_image

    console.log(img)
}

pokemon()