const mongoose = require('mongoose')
const modelSchema = mongoose.Schema({
    comentario:String,
    enviadoPor:String,
    recebidoPor:String,
    postagemId:String,
    avatarEnviadoPor:String
})

const modelComentarios = mongoose.model('comentario',modelSchema)
module.exports = modelComentarios