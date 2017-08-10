const express=require('express');
const app=express();
const PORT=process.env.PORT||8080;

require('./routes/routes-config')(app);

app.listen(PORT,(err)=>{
    console.log(err||('Running on '+PORT));
})