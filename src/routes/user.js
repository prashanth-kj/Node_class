const express =require('express');
 const UserController=require('../controller/user')
 const router= express.Router();
 const Auth = require('../common/auth.js')

   router.get('/',Auth.validate,Auth.adminGuard,UserController.getuser)
   router.get('/:id',UserController.getUserById)
   router.post('/',UserController.create)
   router.put('/:id',UserController.editUser)
   router.delete('/:id',UserController.deleteUser)
   router.post('/login',UserController.login)

   module.exports=router;

