const mongoose = require('mongoose')
const modelSchema = mongoose.Schema({
    likes:Number,
    enviadoPor:String,
    recebidoPor:String,
    postagemId:String,
    avatarEmissor:String,
    nomeEmissor:String
})

const modelLikes = mongoose.model('like',modelSchema)
module.exports = modelLikes