 const getuser=(req,res)=>{
       res.status(200).send({
            message:"get user sucessfully"
       })
 }

 module.exports={
    getuser
 }