//  import express from 'express';        // this is ES script module add type:module in package.json

const express =require('express') // this is common js module used
const AppRouters=require('./src/routes')
 const app= express();
    app.use(express.json())
    app.use('/',AppRouters)
       
    

app.listen(8000, ()=>console.log('app is listening port 8000'))