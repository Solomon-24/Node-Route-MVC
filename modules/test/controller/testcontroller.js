const testmodel = require("../models/testmodels");

async function adduser(req,res){
   
    var data = {
		name : req.body.name,
		email : req.body.email,
		age : req.body.age,
	}
    
    const adduser = await testmodel.adduser(data);
    if(adduser) return res.status(200).json({message:"user Added!!"});
}

async function updateuser(req,res){
    var id = req.params.id;

    const data = {}; 
	if(req.body.name != undefined) data['name'] = req.body.name;
	if(req.body.age != undefined) data['age'] = req.body.age; 
	if(req.body.email != undefined) data['email'] = req.body.email;

    const updateuser = await testmodel.updateuser(id,data);
    if(updateuser) return res.status(200).json({message:"user updated!!"});
}

async function deleteuser(req,res){
    var id = req.params.id;
     const deleteuser = await testmodel.deleteuser(id);
    if(deleteuser) return res.status(200).json({message:"user deleted!!"});
}

async function getoneuser(req,res){
    var id = req.params.id;
    const getuser = await testmodel.getoneuser(id);
    if(getuser) return res.status(200).json(getuser);
}

async function getuser(req,res){
    const getuser = await testmodel.getuser();
    if(getuser) return res.status(200).json(getuser);
}

module.exports = {  adduser,getuser,getoneuser,updateuser,deleteuser };