const modelLikes = require('../Models/modelLikes')

exports.setLikes =async (req,res)=>{

    const list = await modelLikes.find({
        postagemId:req.body.postagemId,
        enviadoPor:req.body.enviadoPor
    })

    if(list.length == 0){
        const like = modelLikes.create({
            likes:req.body.likes,
            recebidoPor:req.body.recebidoPor,
            enviadoPor:req.body.enviadoPor,
            postagemId:req.body.postagemId,
            avatarEmissor:req.body.avatarEmissor,
            nomeEmissor:req.body.nomeEmissor
        })
        res.send('like dado com sucesso')
    }else{
        modelLikes.findByIdAndDelete(list[0]._id,(err)=>{
            console.log(err)
        })
        res.send('like removido')
    }
   
}

exports.getLikes= async(req,res)=>{
    const list = await modelLikes.find()
    res.send(list)
}
exports.getLikesPorId= async(req,res)=>{
    const list = await modelLikes.find({
        postagemId:req.body.postagemId
    })
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