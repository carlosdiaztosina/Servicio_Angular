const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Coche = new Schema(
    {
      nombre: {
        type: String,
      },
      marca: {
        type: String,
      },
      tipo: {
        type: String,
      },
      matricula: {
        type: String,
      },
    },
    {
      collection: 'coches',
    },
  )
  
  module.exports = mongoose.model('coche', Coche)
  