const mongoose = require('mongoose');

const dbConnect = async() =>{
    try{
  const res = await mongoose.connect('mongodb://127.0.0.1:27017/harmonyDB');
  console.log(res)
  if(res) console.log("db connection success")
  } catch(err){
        console.error(err)
    }
}
module.exports = dbConnect