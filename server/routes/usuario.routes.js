const express = require('express')
const router = express.Router()

const usuario = require('../controllers/usuario.controller');

router.get('/', usuario.getUsuarios)
router.post('/', usuario.createUsuario)
router.get('/:id', usuario.getUsuario)
router.put('/:id', usuario.updateUsuario)
router.delete('/:id', usuario.deleteUsuario)

module.exports = router;