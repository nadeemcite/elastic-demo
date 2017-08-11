const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const elasticsearch = require('elasticsearch');
const PORT=process.env.PORT||8080;
app.use(bodyParser.json())
global.elClient=new elasticsearch.Client(require('./config/elasticsearch.config'));
require('./routes/routes-config')(app);

app.listen(PORT,(err)=>{
    console.log(err||('Running on '+PORT));
})