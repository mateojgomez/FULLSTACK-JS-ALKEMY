const dotenv= require ('dotenv');
const envFound = dotenv.config ;
require('dotenv').config();

if (!envFound){
    throw new Error("Couln't find .env file.")
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports ={
    port: process.env.PORT,
    api:{
        prefix: '/api/v1'
    }
    
}