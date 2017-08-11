const app=require('express').Router();
var Home=require('../el-types/home');
app.post('/home',(req,res)=>{
    var home=new Home(req.body.id,req.body.address,req.body.city,req.body.msa,req.body.zipcode);
    Home.createHome(home).then((response)=>{
        res.send({status:true,data:response});
    },(response)=>{
        res.send({status:false,data:response});
    });
});
app.get('/home/:home_id',(req,res)=>{
    Home.getHome(req.params.home_id).then((response)=>{
        res.send({status:true,data:response});
    },(response)=>{
        res.send({status:false,data:response});
    });
});
app.put('/home/:home_id',(req,res)=>{
    var home=new Home(req.body.id,req.body.address,req.body.city,req.body.msa,req.body.zipcode);
    Home.updateHome(home).then((response)=>{
        res.send({status:true,data:response});
    },(response)=>{
        res.send({status:false,data:response});
    });
});
app.post('/home/bulk',(req,res)=>{
    Home.uploadArray(req.body.bulk).then((response)=>{
        res.send({status:true,data:response});
    },(response)=>{
        res.send({status:false,data:response});
    });    
});
app.delete('/home/:home_id',(req,res)=>{    
    Home.deleteHome(new Home(req.params.home_id)).then((response)=>{
        res.send({status:true,data:response});
    },(response)=>{
        res.send({status:false,data:response});
    })
});
app.post('/home/search',(req,res)=>{
    Home.search(req.body.search).then((response)=>{
        res.send({status:true,data:response});
    },(response)=>{
        res.send({status:false,data:response});
    });
});
module.exports=app;