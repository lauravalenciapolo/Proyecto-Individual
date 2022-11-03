const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Pokemons = require ("./Pokemons")
const Types = require("./Types")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", Pokemons); // cuando pongan /pokemons los lleve al archivo Pokemons
router.use("/types", Types);

module.exports = router;
