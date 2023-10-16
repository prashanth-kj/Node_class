const mongoose =require('mongoose');
const DB =require('../common/db.config')
 require('dotenv').config()
try {
      console.log(process.env.dbURL,process.env.dbName);
     mongoose.connect(`${process.env.dbURL}/${process.env.dbName}`) 
} catch (error) {
    console.log(error);
}

module.exports=mongoose