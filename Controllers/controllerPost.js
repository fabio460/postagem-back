const conexao = require('../conexao')
const aws = require('aws-sdk')
conexao()
const modelPost = require('../Models/modelPost')
const mongoose = require('mongoose')


exports.postar = (req,res)=>{
   try {
      modelPost.create({
        titulo:req.body.titulo,
        imagem:req.file.location,
        postagem:req.body.postagem
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
    let s3=new aws.S3()
    try {
        const deletar = modelPost.findByIdAndDelete(req.body._id,err=>{
            if (err) {
                res.send(err)
            } else {
                res.send('deletado com sucesso')
            }
        })
       let S3 =await s3.deleteObject({ Bucket: process.env.BUCKET, Key: req.file.location }).promise();
    } catch (error) {
        console.log(error)
    }
}

