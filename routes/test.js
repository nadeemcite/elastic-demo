var app=require('express').Router();

app.get('/t',(req,res)=>{
    res.send("success");
})


module.exports=app;