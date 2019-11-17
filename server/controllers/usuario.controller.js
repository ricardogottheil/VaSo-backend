const Usuario = require('../models/usuario');

const usuarioCtrl = {}


usuarioCtrl.getUsuarios = async(req, res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

usuarioCtrl.createUsuario = async(req, res) => {
    const usuario = new Usuario(req.body)
    await usuario.save()
    res.json({
        status: "Usuario guardado"
    })
}


usuarioCtrl.getUsuario = async(req, res) => {
    const usuario = await Usuario.findById(req.params.id)
    res.json(usuario)
}

usuarioCtrl.updateUsuario = async(req, res) => {
    const { id } = req.params;
    const usuario = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        ciudad: req.body.ciudad,
        direccion: req.body.direccion,
        email: req.body.email,
        password: req.body.password
    }
    await Usuario.findByIdAndUpdate(id, { $set: usuario }, { new: true })
    res.json({
        status: 'Usuario Actualizado'
    })
}

usuarioCtrl.deleteUsuario = async(req, res) => {
    await Usuario.findByIdAndRemove(req.params.id)
    res.json({
        status: "Usuario eliminado"
    })
}

module.exports = usuarioCtrl;