const MD = require("../models/item_model")

const auth =(user)=>{
    return new Promise(async(res,rej)=>{
            try {
               
                var u = await MD.Register.findOne({user:user})
                res({status:true, data:u})
                
            } catch (error) {
                rej({staus:false, mes:"err"})
            }
    }) 
}





module.exports ={
    auth
}