const mongoose = require('mongoose')
const bcrypt = require ("bcrypt");
const registerSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            unique:true,
            require: (true, " Please insert a name"),
        },
        password:{
            type: String,
            require: true,
       
        },
        email:{
            type: String,
            unique:true,
            require: true,
        },
        name:{
            type:String,
            require: true,
        },
        role:{
            type: String,
            default:"user"
        },
    },
    {
        timestamps: true
    }
)


const deviceSchema = new mongoose.Schema(
    {
        deviceid:{
            type: String,
            require: (true, " Please insert a name"),
            
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
registerSchema.pre('save', async function(next){
    try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt )
        this.password = hashPassword;
        console.log(hashPassword);
        next();
    } catch (error) {
        console.log(error)
    }
});

registerSchema.methods.isCheckPassword = async function(password,next) {
    try {
        return await bcrypt.compare(password, this.password);wertwer   
    } catch (error) {
        next(error);
    }
}

const Register = mongoose.model('Register',registerSchema);
const Device = mongoose.model('Device',deviceSchema);
//mongoose.connect('mongodb+srv://huuhuynh:huu123@cluster0.jkueaoi.mongodb.net/DAT_Database?retryWrites=true&w=majority')
mongoose.connect('mongodb://loctp:abc123@164.70.98.231:27017/admin')
.then(()=>{
    console.log("MD connected")
}).catch((error)=>{
    console.log(error)
})


module.exports = {
    Register,
    Device
}