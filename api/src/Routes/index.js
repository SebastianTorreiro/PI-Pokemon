const { Router } = require('express');
const pokemonsRouter = require('./pokemonsRouter.js')
const typesRouter = require('./typesRouter.js')
// const pokemonsAllRouter = require('./typesRouter.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use('/all', pokemonsAllRouter)
router.use('/pokemons', pokemonsRouter)
router.use('/types', typesRouter)


module.exports = router;
 