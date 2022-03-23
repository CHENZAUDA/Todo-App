const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');
const connection = process.env.DB_CONNECTION
 
    const options = {
      // useCreateIndex: true,
      
    }
    
    mongoose.connect(connection, options)
    .then(() => {
      console.log("mongoDB connected");
    })
    .catch((err) => {
      console.log("Connection error", err.message);
    });



const db = mongoose.connection;
module.exports = db;