const express=require("express");
const app = express();
 app.get("/",(request,response)=>{
    response.sendFile("./gadjets.html",{root:__dirname})
 })
 module.exports=app
