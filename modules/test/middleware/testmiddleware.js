const testmodel = require("../models/testmodels");

async function validate(req,res,next){ 
    const body = req.body || "";
    const method = req.method || "";
    const url = req.originalUrl || ""; 

    if(url == "/adduser"){
        if(body == "") return res.send({error:'Name,email and age is required'});
        if(!req.body.name) return res.send({error:'Name is required'});
        if(!req.body.email) return res.send({error:'Email is required'});
        if(!req.body.age) return res.send({error:'Age is required'});
        if(isNaN(req.body.age)) return res.send({error:'age should be in number'});        
        const checkuseremail = await testmodel.checkuseremail(req.body.email);        
        if(checkuseremail  == true){
            return res.status(404).json({message:"Email already exit"});
        }
    }

    if(url == "/getuser/"+req.params.id){
        const checkuser = await testmodel.checkuser(req.params.id);        
        if(checkuser  == false){
            return res.status(404).json({message:"User not found"});
        }
    }
    
    if(url == "/updateuser/"+req.params.id){
        if(body == "") return res.send({error:'Name,email and age is required'});
        if(req.body?.age != undefined && isNaN(req.body.age)) return res.send({error:'age should be in number'});
        
        if(req.body?.email != undefined){
            const checkuseremail2 = await testmodel.checkuseremail2(req.params.id,req.body.email);
            
            if(checkuseremail2  == true){
                return res.status(404).json({message:"Email already exit"});
            }
        }
    }

     if(url == "/deleteuser/"+req.params.id){
        const checkuser = await testmodel.checkuser(req.params.id);        
        if(checkuser  == false){
            return res.status(404).json({message:"User not found"});
        }
    }
    next();
}

module.exports = { validate };