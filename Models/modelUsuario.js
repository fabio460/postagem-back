const mongoose = require('mongoose');

const schema = mongoose.Schema({
    userName:String,
    email:String,
    senha:String,
    avatar:String
})
const modelCliente = mongoose.model('usuario',schema)

module.exports = modelCliente