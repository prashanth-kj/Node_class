 const userModel=require('../module/user');
 const Auth = require('../common/auth.js');

 const getuser=async(req,res)=>{
       
      try {
            let users=await userModel.find({},{password:0});
            res.status(200).send({
                  message:"data fetched  sucessfully",
                  users
             })
      } catch (error) {
            res.status(500).send({
                  message:"Internal servar error",
                  error:error.message
            })
      }
 }

 const getUserById=async(req,res)=>{
      try {
         
        let user = await userModel.findOne({_id:req.params.id})
         
            res.status(200).send({
                   message:"data fetched sucessfully",
                    user
            })

            
      } catch (error) {
            res.status(500).send({
                  message:"Internal servar error",
                  error:error.message
            })
      }
 }
 
const create=async(req,res)=>{
           
            try {
                   let user =await userModel.findOne({email:req.body.email})
                  if(!user){
                         
                        req.body.password= await Auth.hashPassword(req.body.password);
                        await userModel.create(req.body);  
                        res.status(201).send({
                             message:"user created sucessfully",
                             
                        })
                      

                  }else{
                       res.status(400).send({
                          message:`User with ${req.body.email} already exists`
                       })
                  }
    
            } catch (error) {
                  res.status(500).send({
                        message:"Internal servar error",
                        error:error.message
                  })
            }
 }
 
 const editUser=async(req,res)=>{
        
       try {
            let user =await userModel.findOne({_id:req.params.id})

            if(user){
                  
                  let {firstName,lastName,email,password,status,role} =req.body
                    
                  user.firstName=firstName?firstName:user.firstName,
                  user.lastName=lastName?lastName:user.lastName,
                  user.email=email?email:user.email,
                  user.password=password?password:user.password,
                  user.status=status?status:user.status,
                  user.role=role?role:user.role

                   await user.save()

                   res.status(200).send({
                        message:"user data saved"
                   })

            }
            else{

                  res.status(400).send({
                        message:"invalid user"
                     }) 
            }
            
       } catch (error) {
            res.status(500).send({
                  message:"Internal servar error",
                  error:error.message
            })
       }
 }

 const deleteUser=async(req,res)=>{
         try {
            let user =await userModel.findOne({_id:req.params.id})

              if(user){

                  await userModel.deleteOne({_id:req.params.id})
                  res.status(200).send({
                        message:"user data deleted sucessfully",
                        
                  })
              }
              else{
                   res.status(400).send({
                         message:"Invalid user"
                   })
              }
            
         } catch (error) {
            res.status(500).send({
                  message:"Internal servar error",
                  error:error.message
            })
         }
 }

const login =async(req,res)=>{
      try {
            let user =await userModel.findOne({email:req.body.email})
         if(user){
              
             let hashCompare=await Auth.hashCompare(req.body.password,user.password);
             if(hashCompare){

                     let token=await Auth.createToken({
                        firstname:user.firstName,
                        lastName:user.lastName,
                        email:user.email,
                        role:user.role
                     })

                      res.status(200).send({
                        message:'Login sucessfull',
                        token
                      })
             }
             else{
                  res.status(400).send({
                        message:'Invalid password'
                       
                  })
             }
              



         }
         else{
            res.status(400).send({
                  message:`Account with ${req.body.email} does not exists`
                 
            })
              
         }
            
      } catch (error) {
            res.status(500).send({
                  message:"Internal servar error",
                  error:error.message
            })
      }
}



 module.exports={
    getuser,
    getUserById,
    create,
    editUser,
    deleteUser,
    login
 }