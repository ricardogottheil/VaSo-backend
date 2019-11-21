const mongoose = require('mongoose')
const { Schema } = mongoose;
const Producto = mongoose.model('Producto')
const Usuario = mongoose.model('Usuario')

const comentarioSchema = new Schema({
    mensaje: {
        type: String,
        required: [true, "El mensaje es requerido"],
    },
    calificacion: {
        type: Number,
        default: 0,
    }
});


module.exports = mongoose.model('Comentario', comentarioSchema);