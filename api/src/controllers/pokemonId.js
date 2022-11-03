const axios = require("axios");
const allPokemons = require("./allPokemons");
const {Pokemon, Type} = require ("../db")


const pokemonId= async (id) => {
    if(id > 0 && id < 41){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokeid = await response.data
        const detailpokeapi = {
        id:pokeid.id,
        img:pokeid.sprites.other.home.front_default,
        name:pokeid.forms[0].name,
        type: pokeid.types.map(poke => {
            return poke.type.name
            }),
        life: pokeid.stats[0].base_stat,
        height: pokeid.height,
        weight: pokeid.weight,
        attack: pokeid.stats[1].base_stat,
        defense: pokeid.stats[2].base_stat,
        speed: pokeid.stats[5].base_stat
    }
    // console.log(detailpokeapi)
    return detailpokeapi
    } else{
        const detailpokeDb = await Pokemon.findByPk(id, {include: {
            model: Type,
            attributes: ["name"],
            through:{
                attributes:[],
            }
        }})
        if (!detailpokeDb) throw new Error (`El id: ${id} no corresponde a un pokemon existente`)
        return detailpokeDb; 
    }
}

module.exports = pokemonId;