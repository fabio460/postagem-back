const rota = require('express').Router()

const upload = require('./upload')
const controllerUsuario = require('./Controllers/controllerUsuario')
const controllerPost = require('./Controllers/controllerPost')
rota.post("/upload",upload.single('imagem'),controllerPost.postar)
rota.delete('/delete',upload.single('imagem'),controllerPost.deletar)
rota.post('/jwt',upload.single('imagem'),controllerUsuario.autenticarCliente)
rota.post('/cadastrarUsuario',upload.single('avatar'),controllerUsuario.cadastrarUsuario)
rota.get("/",controllerPost.listar)
rota.get("/getUsuarios",controllerUsuario.exibirCliente)
module.exports = rota