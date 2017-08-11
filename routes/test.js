const app=require('express').Router();
app.get('/test',(req,res)=>{
    global.elClient.ping((err)=>{
        res.send(err||'Working fine');
    });
});



module.exports=app;