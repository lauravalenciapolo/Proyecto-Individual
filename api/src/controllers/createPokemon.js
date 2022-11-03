const {Pokemon, Type} = require ("../db")

const createPokemon = async (name, life, attack, defense, speed, height, weight, img, types) =>{
        if (!name) throw new Error ("Ingresa el nombre de tu nuevo Pokemon");
        const newPokemon = await Pokemon.create({
            name,
            life,
            attack,
            defense,
            speed,
            height,
            weight,
            img
        });
        const typesDb = await Type.findAll({
            where: {name:types}
        })
        newPokemon.addType(typesDb)
        return ("Your pokemon was successfully created!")
}

module.exports= createPokemon;