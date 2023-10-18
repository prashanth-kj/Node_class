const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken')

const hashPassword=async(password)=>{
       let salt= await bcrypt.genSalt(Number(process.env.SALT_ROUNDS))
    //    console.log(salt);
       let hash= await bcrypt.hash(password,salt)
       return hash
}

const hashCompare=async(password,hash)=>{
    return await bcrypt.compare(password,hash)
}


const createToken=async(payload)=>{
     
        let token =await jwt.sign(payload,process.env.JWT_SECRET,{
             expiresIn: process.env.JWT_EXPIRE
        })

        return token
}


const decodeToken=async(token)=>{
       
         let payload = await jwt.decode(token)
         return payload
}

const validate= async(req,res,next)=>{
       
      let token = await req.headers.authorization?.split(" ")[1];
       if(token){

            let payload = await decodeToken(token);
            let currentTime= (+new Date()/1000);
             if(currentTime < payload.exp){
                  next()
             }
             else{
                 res.status(400).send({
                     message:"Token expired"
                 })
             }
            
           
       }
       else{
           res.status(400).send({
              message:'No token found'
           })
       }
       
}


const adminGuard= async(req,res,next)=>{
       
    let token = await req.headers.authorization?.split(" ")[1];
     if(token){

          let payload = await decodeToken(token);
           if(payload.role==="admin"){
                next()
           }
           else{
               res.status(400).send({
                   message:"Only admins allowed"
               })
           }
          
         
     }
     else{
         res.status(400).send({
            message:'No token found'
         })
     }
     
}



module.exports={
       hashPassword,
       hashCompare,
       createToken,
       validate,
       adminGuard
}