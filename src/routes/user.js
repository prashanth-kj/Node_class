const express =require('express');
 const UserController=require('../controller/user')
 const router= express.Router();

   router.get('/',UserController.getuser)

   module.exports=router;

