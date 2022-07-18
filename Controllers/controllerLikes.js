const modelLikes = require('../Models/modelLikes')

exports.setLikes = (req,res)=>{

   const like = modelLikes.create({
        likes:req.body.likes,
        comentarios:req.body.comentarios,
        recebidoPor:req.body.recebidoPor,
        enviadoPor:req.body.enviadoPor,
        postagemId:req.body.postagemId
    })
   res.send(like) 
}

exports.getLikes= async(req,res)=>{
    const list = await modelLikes.find()
    res.send(list)
}
exports.updataLikes = (req,res)=>{
   try {
    modelLikes.findByIdAndUpdate(req.body.postagemId,{
        likes:req.body.likes,
        comentarios:req.body.comentarios,
        recebidoPor:req.body.recebidoPor,
        enviadoPor:req.body.enviadoPor
    },(err)=>{
        console.log(err)
    })
    res.send('alterado com sucesso')
   } catch (error) {
    res.send(error)
   }
}
exports.deleteLike = (req,res)=>{
    modelLikes.findByIdAndDelete(req.body.id,(err)=>{
        console.log(err)
    })
    res.send("deletado")
}