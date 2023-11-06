const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema(
    {
        user:{
            type: String,
            require: (true, " Please insert a name")
        },
        pass:{
            type: String,
            require: true,
       
        },
        mail:{
            type: String,
            require: true,
        }
    },
    {
        timestamps: true
    }
)


const deviceSchema = new mongoose.Schema(
    {
        deviceid:{
            type: String,
            require: (true, " Please insert a name")
        },
        name:{
            type: String,
            require: true,
            default: 1
        },
        des:{
            type: String,
            require: true,
        },
        status:{
            type: Boolean,
            require: true,
        }
    },
    {
        timestamps: true
    }
)

const Register = mongoose.model('Register',registerSchema);
const Device = mongoose.model('Device',deviceSchema);
mongoose.connect('mongodb+srv://huuhuynh:huu123@cluster0.jkueaoi.mongodb.net/DAT_Database?retryWrites=true&w=majority')
.then(()=>{
    console.log("MD connected")
}).catch((error)=>{
    console.log(error)
})

module.exports = {
    Register,
    Device
}