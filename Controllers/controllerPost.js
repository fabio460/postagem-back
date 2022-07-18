require('dotenv').config()
const conexao = require('../conexao')
const aws = require('aws-sdk')
conexao()
const modelPost = require('../Models/modelPost')


exports.postar = (req,res)=>{
   try {
      modelPost.create({
        titulo:req.body.titulo,
        imagem:req.file.location,
        postagem:req.body.postagem,
        avatar:req.body.avatar,
        userName:req.body.userName,
        email:req.body.email,
        data:new Date()
      })
      console.log(req.file)
   } catch (error) {
       console.log(error)
   } 
   res.send("postagem inserida com sucesso")
}

exports.listar =async (req,res)=>{
    const post =await modelPost.find()
    res.send(post)
}

exports.deletar =async (req,res)=>{
    
    const post =await modelPost.find({
        _id:req.body._id
    })
    
    // let objeto = post
    // //let fileName = objeto.split('/')
    // console.log(objeto)
    let s3=new aws.S3()
    try {
        const deletar = modelPost.findByIdAndDelete(req.body._id,err=>{
            if (err) {
                res.send(err)
            } else {
                res.send('deletado com sucesso')
            }
        })
       let S3 =await s3.deleteObject({ Bucket: process.env.BUCKET, Key: req.body.fileName}).promise();
    } catch (error) {
        console.log(error)
    }
}

