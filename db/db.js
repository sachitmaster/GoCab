const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect(process.env.db_connect)
    .then(()=>{
        console.log("Connected to MongoDB")
    }).catch(err => console.log(err))
}

module.exports = connectToDb