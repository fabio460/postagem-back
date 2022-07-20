const modelComentarios = require('../Models/modelComentarios')
exports.postarComentario = (req,res)=>{
    modelComentarios.create({
        comentario:req.body.comentario,
        enviadoPor:req.body.enviadoPor,
        recebidoPor:req.body.recebidoPor,
        postagemId:req.body.postagemId
    })
    res.send('comentario feito')
}
exports.getComentarios =async (req,res)=>{
   let list = await modelComentarios.find({
    postagemId:req.body.postagemId
   })
   res.send(list)
}
exports.deleteComentarios =async (req,res)=>{
    let list = await modelComentarios.findByIdAndDelete(req.body._id,(err)=>{
        if (err) {
            res.send(err)
        }else{
            res.send('comntario deletado com sucesso')
        }
    })
   
 }