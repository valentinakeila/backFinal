const express = require('express');
const router = express.Router();
const {
    obtenerConsultas,
    crearConsultas,
    actualizarConsultas,
    eliminarConsultas
} = require('../controllers/consultasControllers')

//responde a la path /api
router.get('/', obtenerConsultas);
router.post('/', crearConsultas);
router.put('/:id', actualizarConsultas);
router.delete('/:id', eliminarConsultas);

module.exports = router;