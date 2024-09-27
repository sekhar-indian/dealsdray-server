const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const schema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    image:{
        type:String
    }

});

module.exports=mongoose.model('Employ',schema)