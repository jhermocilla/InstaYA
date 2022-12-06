const mongoose = require("mongoose");
const { Schema } = mongoose
mongoose.model('users')

const crearOrden = new Schema({
  fecha: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  largo: {
    type: Number,
    required: true
  },
  ancho: {
    type: Number,
    required: true
  },
  alto: {
    type: Number,
    required: true
  },
  peso: {
    type: Number,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  ciudad: {
    type: String,
    required: true
  },
  destinatario: {
    type: String,
    required: true
  },
  idestinatario: {
    type: String,
    required: true
  },
  direccionE: {
    type: String,
    required: true
  },
  ciudadE: {
    type: String,
    required: true
  },
  userId: { type: Schema.Types.ObjectId, refs: 'users' }
  

});

module.exports = mongoose.model('auth', crearOrden);