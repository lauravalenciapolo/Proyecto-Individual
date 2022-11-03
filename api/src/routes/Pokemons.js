const allPokemons = require('../controllers/allPokemons');
const createPokemon = require('../controllers/createPokemon');
const pokemonId = require('../controllers/pokemonId');

const router = require('express').Router();

router.get("/", async(req, res)=>{
    // const all = await allPokemons()
    // res.status(200).send(all)
    try {
        const {name} = req.query
        const allpokemons = await allPokemons()
        if(name){
            const pokename = await allpokemons.filter(poke => {
                return poke.name.toLowerCase() === name.toLowerCase()
            })
            if(pokename.length > 0) {
                return res.status(200).json(pokename)
            } else {
                return res.status(400).send(`Pokemon: ${name} doesn´t exist. Enjoy to create`)
            }
        } else {
            return res.status(200).json(allpokemons) 
        }

    } catch (error) {
        return res.status(400).send("Error de carga. Intentalo más tarde")
    }
 
});

router.get("/:id", async(req, res)=>{
    try {
        const {id} = req.params
            let idapipokemon = await pokemonId(id)
            return res.status(200).json(idapipokemon)
    } 
    catch (error) {
        return res.status(400).send(error.message)
    }
});

router.post("/", async (req,res)=>{
    try {
        const {name, life, attack, defense, speed, height, weight, img, types} = req.body
        const newPokemon = await createPokemon(name, life, attack, defense, speed, height, weight, img, types)
        res.status(201).send(newPokemon);
    } catch (error) {
        return res.status(400).send(error.message)
    }
});

module.exports = router;