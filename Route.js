const rota = require('express').Router()

const upload = require('./upload')
const controllerUsuario = require('./Controllers/controllerUsuario')
const controllerPost = require('./Controllers/controllerPost')
rota.post("/upload",upload.single('imagem'),controllerPost.postar)
rota.delete('/delete',upload.single('imagem'),controllerPost.deletar)
rota.post('/jwt',controllerUsuario.autenticarCliente)
rota.get("/",controllerPost.listar)
module.exports = rota