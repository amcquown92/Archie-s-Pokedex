/*const promise = new Promise((resolve, reject) =>{ 
    setTimeout(() => resolve("Done!"),1000);
    });
    promise.then(result => {
        console.log(result);
        });
        
        fetch("http://pokeapi.co/api/v2/pokemon/pikachu")
        .then(response => response.json())
        .then(data => console.log(data.name));
        */
let pokemon = "zapdos"
const pokeFigure = document.querySelector(".poke-figure");
function capitalizeFirstChar(string){
    return string[0].toUpperCase() + string.slice(1)
}
async function getPokemon() {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        console.log(response.data);
        return response.data
    } catch(err) {
        console.error("Axios error:", err.response?.status, err.message);
    }
}
async function extractPokemon(pokemonData) {
    const img = document.createElement('img');
    const figCap = document.createElement('figcaption');
    img.src = pokemonData.sprites.front_default;
    const name = capitalizeFirstChar(pokemonData.name);
    figCap.textContent = name;
    pokeFigure.appendChild(img)
    pokeFigure.appendChild(figCap);
    
}
async function WhoIsThatPokemon(){
    try {
        const data = await getPokemon();
        extractPokemon(data)
    } catch(err){
        console.err("Error:", err);
    }

}
WhoIsThatPokemon()