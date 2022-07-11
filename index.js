
const express = require('express')
//require('dotenv').config()
//const  route  = require('./Route')
//const cors = require('cors')
const app = express()
//app.use(cors())
//app.use(route)
app.get('/',(req,res)=>{
    res.send('teste')
})
//const PORT = process.env.PORT || 4000;
app.listen(4000,()=>console.log('posta 4000'))