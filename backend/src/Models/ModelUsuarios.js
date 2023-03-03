const {Schema, model} = require('mongoose');

const SchemeUser = new Schema({
    nombre: String,
    apellido: String,
    telefono: Number,
    correo: String
})

module.exports = model('Usuario', SchemeUser);