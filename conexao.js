const mongoose = require('mongoose')

const conexao = ()=>{
    mongoose.connect(process.env.URL_MONGOOSE,{
        useNewUrlParser:true,
        useUnifiedTopology:true
      })

      
      const db = mongoose.connection;
      db.on('erro',error=>{console.error(error)})
      db.once("open",()=>{console.log('conectado com sucesso')}); 
}
module.exports = conexao