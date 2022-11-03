const axios = require("axios")
const {Type} = require("../db")

const typesPokemons = async ()=>{
    const response = await axios.get("https://pokeapi.co/api/v2/type")
    const types = await response.data.results.map(type => {
        return type.name
    })
    console.log(types)
    // const typesobj = types.map(type=>{
    //     return {
    //         name: type
    //     }
    // })
    // console.log(typesobj)
   //La funcion bulkCreate debe recibir un array de ojetos, el key debe ser el nombre del atributo y value el valor  
    // const typesPoke = await Type.bulkCreate(typesobj)
    // const alltypesDb = await Type.findAll();
    // return alltypesDb;
    types.forEach(e=> {
        Type.findOrCreate({
            where:{name:e}
        })
    })

    const alltypesDb = await Type.findAll()
    return alltypesDb;
}

module.exports = typesPokemons;