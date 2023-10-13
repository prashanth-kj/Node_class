//  import express from 'express';        // this is ES script module

const express =require('express') // this is common js module
const AppRouters=require('./src/routes')
 const app= express();
    app.use(express.json())
    app.use('/',AppRouters)
       
    

app.listen(8000, ()=>console.log('app is listening port 8000'))