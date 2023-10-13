 const express= require('express');
 const router=  express.Router();
 const CouponRouter= require('./coupons')
 const UserRouter=require('./user')

router.use('/coupons',CouponRouter);
router.use('/user',UserRouter)

module.exports=router;
   