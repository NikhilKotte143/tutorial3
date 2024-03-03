const express=require(express);
const app = express();
 app.get("/gadgets",(request,response)=>{
    response.sendFile("./gadjets.html",{root:__dirname})
 })
 module.exports=app