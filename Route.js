const rota = require('express').Router()
require('dotenv').config() 
const upload = require('./upload')

const controllerPost = require('./Controllers/controllerPost')
rota.post("/upload",upload.single('imagem'),controllerPost.postar)
rota.delete('/delete',upload.single('imagem'),controllerPost.deletar)
rota.get("/",controllerPost.listar)
module.exports = rota