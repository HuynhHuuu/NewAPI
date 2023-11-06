const MD = require("../models/item_model")

const addDevice =(data)=>{
    return new Promise(async(res,rej)=>{
            try {
                let device = new MD.Device(data)
                device.save()
                
                .then((data)=>{
                    console.log(data)
                    res({status:true})
                })

                .catch((err)=>{
                    rej({status:false,mes:"DB ERR"})
                })
                
            } catch (error) {
                rej({status:false, mes:"err"})
            }
    }) 
}

const updateAtId=(id,data)=>{
    return new Promise(async(res,rej)=>{
        try {
            await MD.Device.findOneAndUpdate({deviceid:id},data)
            .then((data)=>{
                console.log(data)
                if(data == null){
                    res({status:false, mes:"ID not found"})
                }else{
                    res({status:true})
                }   
            })
            .catch((err)=>{
                console.log(err)
                rej({status:false, mes:"DB ERR"})
            })    
        } catch (error) {
            rej({status:false, mes:"SYS ERR"})
        }
}) 
}

const deleteDevice=(id)=>{
    return new Promise(async(res, rej) => {
        try {
            await MD.Device.findOneAndDelete({deviceid:id})
            .then((data)=>{
                console.log(data)
                res({status:true, mes:"Deleted"})
            })
            .catch((err)=>{
                rej({status:false})
            })
            
        } catch (error) {
            rej({status:false, mes:"Err"})
        }
    })
}

const replaceinData=(id,data)=>{
    return new Promise(async(res,rej)=>{
        try {
            await MD.Device.findOneAndReplace({deviceid:id},MD.Device.data)
            .then((data)=>{
                console.log(data)
                res({status:true,mes:"Successful"})
            })
            .catch((err)=>{
                rej({status:false})
            })
        } catch (error) {
            rej({status:false, mes:"ERR"})
        }
    })
}

module.exports ={
    addDevice,
    updateAtId,
    deleteDevice,
    replaceinData
}