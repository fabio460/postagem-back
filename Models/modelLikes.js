const mongoose = require('mongoose')
const modelSchema = mongoose.Schema({
    likes:Number,
    comentarios:String,
    enviadoPor:String,
    recebidoPor:String,
    postagemId:String
})

const modelLikes = mongoose.model('like',modelSchema)
module.exports = modelLikes