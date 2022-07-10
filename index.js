
const express = require('express')
const  route  = require('./Route')
const cors = require('cors')
const app = express()
app.use(cors())
//app.use(route)
app.get('/',(req,res)=>{
    res.send('teste')
})
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>console.log('posta 4000'))