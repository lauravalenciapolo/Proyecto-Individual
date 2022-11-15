const axios = require("axios")
const {Pokemon, Type} = require ("../db")

const allPokemons= async () => {
    // cada que lo guardo en una variable genero otra promesa 

    //Con axios pokemones de la API
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=40")
    const pokeapi = await response.data.results.map(async poke =>{
        const pokemon = await axios.get(poke.url)
        const poketypeapi = await pokemon.data.types.map(poke => {
            // return poke.type.name
            return {name: poke.type.name}
            })
        const imageapi = await pokemon.data.sprites.other.dream_world.front_default
        const id = await pokemon.data.id
        const attack = await pokemon.data.stats[1].base_stat
            return {
                id: id,
                name: poke.name,
                types: poketypeapi,
                img: imageapi,
                attack: attack
            }
        })
        //Pokemones de la DB
        const pokemonsDb = await Pokemon.findAll({
            attributes: ["name", "img", "id", "attack" ],
            include: {
                model: Type,
                attributes: ["name"],
                through:{
                    attributes:[],
                }
            }
        })


    return Promise.all(pokeapi.concat(pokemonsDb)).then(data => data) 
}

module.exports = allPokemons;