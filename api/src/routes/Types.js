const typesPokemons = require('../controllers/typesPokemons');

const router = require('express').Router();

router.get("/", async (req, res)=>{
    try {
        const types = await typesPokemons()
        res.status(200).json(types)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;