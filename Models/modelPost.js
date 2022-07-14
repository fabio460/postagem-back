const mongoose = require('mongoose')

const modelSchema = mongoose.Schema({
    titulo:String,
    imagem:String,
    postagem:String,
    avatar:String,
    userName:String,
    email:String
})

const modelPost = mongoose.model('post',modelSchema)
module.exports = modelPost