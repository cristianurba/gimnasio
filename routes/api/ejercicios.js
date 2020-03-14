const router = require('express').Router();

const Ejercicio = require('../../models/ejercicio');

//GET hhtp://localhost:3000/api/ejercicios
router.get('/', async (req, res) => {
    const rows = await Ejercicio.getAll();
    res.json(rows);
});

// POST http://localhost:3000/api/ejercicios
router.post('/', async (req, res) => {
    const result = await Ejercicio.create(req.body);
    res.json(result);
});

//PUT http://localhost:3000/api/ejercicios/:pEjercicioId
router.put('/:pEjercicioId', async (req, res) => {
    const result = await Ejercicio.updateById(req.body, req.params.pEjercicioId);
    res.json(result)
});

// DELETE http://localhost:3000/api/ejercicios
router.delete('/', async (req, res) => {
    const result = await Ejercicio.deleteById(req.body.id);
    res.json(result);
});

module.exports = router;