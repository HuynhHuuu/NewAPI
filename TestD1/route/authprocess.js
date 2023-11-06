const MD = require("../models/item_model")

const auth =(data)=>{
    return new Promise(async(res,rej)=>{
            try {
               
                var u = await MD.Register.findOne({user:data})
                res({status:true, data:u})
                
            } catch (error) {
                rej({staus:false, mes:"err"})
            }
    }) 
}





module.exports ={
    auth
}