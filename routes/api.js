const router = require('express').Router();

const apiClientesRouter = require('./api/clientes');
const apiEjerciciosRouter = require('./api/ejercicios');

router.use('/clientes', apiClientesRouter);
router.use('/ejercicios', apiEjerciciosRouter);

module.exports = router;