const router = require('express').Router();

const apiClientesRouter = require('./api/clientes');
const apiEjerciciosRouter = require('./api/ejercicios');
const apiProfesoresRouter = require('./api/profesores')

router.use('/clientes', apiClientesRouter);
router.use('/ejercicios', apiEjerciciosRouter);
router.use('/profesores', apiProfesoresRouter);

module.exports = router;