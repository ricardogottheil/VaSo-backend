const mongoose = require('mongoose')
const { Schema } = mongoose;
const Producto = mongoose.model('Producto')
const Usuario = mongoose.model('Usuario')

const comentarioSchema = new Schema({
    nombreCliente: {
        type: String,
        required: [true, "El nombre es requerido"],
    },
    emailCliente: {
        type: String,
        required: [true, "El correo electrónico es requerido"],
    },
    mensaje: {
        type: String,
        required: [true, "El mensaje es requerido"],
    },
    productosSeleccionados: {
        type: String,
        default: "",
    },
    calificacion: {
        type: Number,
        default: 5,
    }
});


module.exports = mongoose.model('Comentario', comentarioSchema);