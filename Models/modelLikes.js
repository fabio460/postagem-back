const mongoose = require('mongoose')
const modelSchema = mongoose.Schema({
    likes:Number,
    enviadoPor:String,
    recebidoPor:String,
    postagemId:String
})

const modelLikes = mongoose.model('like',modelSchema)
module.exports = modelLikes