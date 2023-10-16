//  import express from 'express';        // this is ES script module add type:module in package.json

const express =require('express') // this is common js module used

const dotenv=require('dotenv')
const cors=require('cors')
const AppRouters=require('./src/routes')
 dotenv.config()

  const PORT = process.env.PORT

 const app= express();
    app.use(cors())
    app.use(express.json())
    app.use('/',AppRouters)
       
    

app.listen(PORT, ()=>console.log(`app is listening port ${PORT}`))