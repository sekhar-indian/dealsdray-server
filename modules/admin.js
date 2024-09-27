const mongoose=require('mongoose');
const Scheme=mongoose.Schema;

const scheme=new Scheme({
    user_name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('admin',scheme);