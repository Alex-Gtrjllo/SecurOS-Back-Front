const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskScheema = new Schema({
    solicitud_licencia: { type: String, required: true},
    licencia: {type: String, required: true},
    versiones: { type: String, required: true},
    edicion: {type: String, required: true},
    idioma: { type: String, required: true},
    rol: {type: String, required: true}

})

module.exports = mongoose.model('Task', TaskScheema);