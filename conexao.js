const mongoose = require('mongoose')

const conexao = ()=>{
    mongoose.connect("mongodb+srv://meuBanco:fabio2020@cluster0.w2xad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology:true
      })

      
      const db = mongoose.connection;
      db.on('erro',error=>{console.error(error)})
      db.once("open",()=>{console.log('conectado com sucesso')}); 
}
module.exports = conexao