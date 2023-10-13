let coupons=[
    {
        name:"October Offer",
        code:"Oct-23",
        startDate:"2023-10-12",
        endDate:"2023-10-20",
        offerValue:100,
        discount:10,
        status:true
    },
    {
        name:"World Children day",
        code:"Child-14",
        startDate:"2023-10-14",
        endDate:"2023-10-14",
        offerValue:200,
        discount:20,
        status:true
    }
]


const getAllCoupons=(req,res)=>{
    res.status(200).send({
      message:"data fetched successfully",
      count:coupons.length,
      coupons
      })
}

const getCouponsById=(req,res)=>{
       
    const id= Number(req.params.id);
     
       if(id !== NaN  && id<coupons.length) {
            res.status(200).send({
               message:"Data fetched sucessfully",
               coupons:coupons[id]
            })
       }
       else{
            res.status(400).send({
                message:"invalid id"
            })
       }
 }

 const createCoupon = (req,res)=>{
    let data=req.body;
    let  filteredData=coupons.filter((e)=>e.code===data.code)
       
       if(filteredData.length===0){
         
          coupons.push(data)
         res.status(201).send({
            message:"coupoun create sucessfully"
          })
       }
       else{
        res.status(400).send({
            message:"coupouns already exists"
          })
       }
     
}

const editCoupon=(req,res)=>{
         
    let id =req.params.id;

      if(id!==NaN && id<coupons.length){
       coupons.splice(id,1,req.body);
         res.status(200).send({
           message:"coupoun edited sucessfully"
         })
      }
      else{
               res.status(400).send({
                   message:"invalid id"
               })
      }
}


const deleteCoupon=(req,res)=>{
         
    let id =req.params.id;

      if(id!==NaN && id<coupons.length){
       coupons.splice(id,1);
         res.status(200).send({
           message:"coupoun deleted sucessfully"
         })
      }
      else{
        res.status(400).send({
            message:"invalid id"
        })
      }
}


module.exports ={
    getAllCoupons,
    getCouponsById,
    createCoupon,
    editCoupon,
    deleteCoupon

}