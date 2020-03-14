const router = require('express').Router();

const Profesor = require('../../models/profesor');

//GET hhtp://localhost:3000/api/profesores
router.get('/', async (req, res) => {
    const rows = await Profesor.getAll();
    res.json(rows);
});

// POST http://localhost:3000/api/profesores
router.post('/', async (req, res) => {
    const result = await Profesor.create(req.body);
    res.json(result);
});

//PUT http://localhost:3000/api/profesores/:pProfesorId
router.put('/:pProfesorId', async (req, res) => {
    const result = await Profesor.updateById(req.body, req.params.pProfesorId);
    res.json(result)
});

// DELETE http://localhost:3000/api/profesores
router.delete('/', async (req, res) => {
    const result = await Profesor.deleteById(req.body.id);
    res.json(result);
});

module.exports = router;