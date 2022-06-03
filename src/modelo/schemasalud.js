const mongoose = require('mongoose')
const { Schema } = mongoose

const Salud = new Schema ({
    id: { type: String, required: true},
    nombre: { type: String, required: true},
    nivel: { type: String, required: true},
    latitud: { type: String, required: true},
    longitud: { type: String, required: true}
});

module.exports = mongoose.model('Salud', Salud)