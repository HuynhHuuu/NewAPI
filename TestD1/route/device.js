const router = require("express").Router()
const deviceprocess = require("./deviceprocess")

router.post("/", async (req, res) => {
    const device = await deviceprocess.getAll()
    res.status(200).json(device)
})

router.post("/addDevice", async (req, res) => {
    const device = await deviceprocess.addDevice(req.body)
    res.status(200).json(device)
})

router.put("/update", async(req,res)=>{
    const data = JSON.parse(req.body.data)
    const update ={name:data.name,status:data.stt}
    const device = await deviceprocess.updateAtId(data.id,update)
    //console.log(device)
    res.status(200).json(device)
    //res.status(200).send(device)
    
})

router.delete("/delete",async(req,res)=>{
    const device = await deviceprocess.deleteDevice(req.body.id)
    res.status(200).json(device)
})

// router.put("/rep",async(req,res)=>{
//     const device = await deviceprocess.replaceinData(req.body.id)
//     res.status(200).json(device)
// })




module.exports = router;