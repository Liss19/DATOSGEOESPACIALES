const mongoose = require('mongoose')
const { Schema } = mongoose

const Colonias = new Schema ({
    id: { type: String, required: true},
    nombre: { type: String, required: true},
    lat: { type: String, required: true},
    long: { type: String, required: true},
    cve_alc: { type: String, required: false},
    alcaldia: { type: String, required: true}
});

module.exports = mongoose.model('Colonia', Colonias)
