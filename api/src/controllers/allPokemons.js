const axios = require("axios")
const {Pokemon, Type} = require ("../db")

const allPokemons= async () => {
    // cada que lo guardo en una variable genero otra promesa 

    //Con axios pokemones de la API
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
    const pokeapi = await response.data.results.map(async poke =>{
        const pokemon = await axios.get(poke.url)
        const poketypeapi = await pokemon.data.types.map(poke => {
            // return poke.type.name
            return {name: poke.type.name}
            })
        const imageapi = await pokemon.data.sprites.other.home.front_default
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
        const response2 = await axios.get(response.data.next)
        const pokeapi2 = await response2.data.results.map(async poke =>{
            const pokemon = await axios.get(poke.url)
            const poketypeapi = await pokemon.data.types.map(poke => {
                // return poke.type.name
                return {name: poke.type.name}
                })
            const imageapi = await pokemon.data.sprites.other.home.front_default
            const id = await pokemon.data.id
            const attack = await pokemon.data.stats[1].base_stat
                return {
                    id: id,
                    name: poke.name,
                    types: poketypeapi,
                    img: imageapi,
                    attack: attack,
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


    return Promise.all(pokeapi.concat(pokeapi2,pokemonsDb)).then(data => data) 
    //ME LLEGA UN OBJETO CON 40 RESULTADOS DE POKEMONES CON NAME, TYPE [], IMG CAMBIAR A RETURN 
}

module.exports = allPokemons;