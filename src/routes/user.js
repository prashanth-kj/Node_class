const express =require('express');
 const UserController=require('../controller/user')
 const router= express.Router();

   router.get('/',UserController.getuser)
   router.get('/:id',UserController.getUserById)
   router.post('/',UserController.create)
   router.put('/:id',UserController.editUser)
   router.delete('/:id',UserController.deleteUser)

   module.exports=router;

