const db = require("../../../config/db");


async function adduser(data){
    
    try{
        const addrow = await db("user_table").insert(data);
        return true;
    }catch(err){
        return err;
    }
}

async function updateuser(id,data){
    
    try{
        const addrow = await db("user_table").update(data).where({id});
        return true;
    }catch(err){
        return err;
    }
}

async function deleteuser(id){
    
    try{
        const row = await db("user_table").delete().where({id});
        return true;
    }catch(err){
        return err;
    }
}

async function checkuseremail(email){
    try{
        const existingUser = await db("user_table").where({ email }).first(); 
        return !!existingUser;
    }catch(err){
        throw err;
    }
}
async function checkuseremail2(id,email){
    try{
        const existingUser = await db("user_table").whereNot({id}).where({ email }).first(); 
        return !!existingUser;
    }catch(err){
        throw err;
    }
}

async function checkuser(id){
    try{
        const existingUser = await db("user_table").where({ id }).first(); 
        return !!existingUser;
    }catch(err){
        throw err;
    }
}

async function getuser(){

    try{
        return await db("user_table").select("*");
    }catch(err){
        throw err;
    }
}

async function getoneuser(id){

    try{
        return await db("user_table").select("*").where({id}).first();
    }catch(err){
        throw err;
    }
}

module.exports = {adduser,checkuseremail,checkuser,getuser,getoneuser,checkuseremail2,updateuser,deleteuser};