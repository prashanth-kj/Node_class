const mongoose =require('mongoose');
 require('dotenv').config()
try {
     
     mongoose.connect(`${process.env.dbURL}/${process.env.dbName}`) 
} catch (error) {
    console.log(error);
}

module.exports=mongoose