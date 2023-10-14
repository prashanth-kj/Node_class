const mongoose =require('mongoose');
const DB =require('../common/db.config')

try {
     mongoose.connect(`${DB.dbURL}/${DB.dbName}`) 
} catch (error) {
    console.log(error);
}

module.exports=mongoose