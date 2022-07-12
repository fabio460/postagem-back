
const modelCliente = require('../Models/modelUsuario')
const jwt = require('jsonwebtoken')
exports.cadastrarCliente =async (req,res)=>{
    
        const  e = await modelCliente.findOne({
            email:req.body.email
        })
        let mensagem = ''

        if(e === null){
            modelCliente.create({
                nome:req.body.nome,
                email:req.body.email,
                senha:req.body.senha
            })
            mensagem ='usuario cadastrado com sucesso'
        }else{
            mensagem='cliente ja existe na base de dados'
        }
        res.json(mensagem)
}

exports.exibirCliente =async (req,res)=>{
   const  p = await modelCliente.find()
   res.send(p)
}

exports.deletarCliente = async (req,res)=>{
   modelCliente.findByIdAndDelete(req.params.id,(err)=>{
       if(err){
           res.send('erro ao deletar: '+err)
       }else{
           res.send('usuario deletado ')
       }
   })
}
exports.exibirEmail = async (req,res)=>{
    const p =await modelCliente.findOne({
        email:req.params.email
    })
    res.send(p)
}
exports.autenticarCliente = async (req,res)=>{
    const {email,senha} = req.body;
   const user =await modelCliente.findOne({
     email,
     senha
   })

   if(!user){
     res.send('usuario não encontrado')
   }else{
     return res.json({
       token : jwt.sign({modelCliente:req.body.modelCliente},'my-secret-key',{expiresIn:300}),
       nome:user.nome,
       email:user.email,
     })
   }
}