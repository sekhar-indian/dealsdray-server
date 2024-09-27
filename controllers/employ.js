const Employ=require('../modules/employs');
const bcrypt=require('bcrypt');
const adminSchem = require('../modules/admin');
const jwt=require('jsonwebtoken');
const userData=async (req,res,next)=>{
    res.send('hi'); 
}

const employList=async(req,res,next)=>{
    try{
        const data=await Employ.find();
        res.status(200).send(data)
       
    }catch(err){
        console.log(err)
    }
}

function dateCreate(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

const update=async(req,res,next)=>{
    const {id}=req.params;
    const { name, email, number,designation, gender, course}=req.body
    try{
      const employ= await Employ.findById(id);
      if(!employ){
        return res.status(200).send('ok')
      }
      employ.name = name;
      employ.email = email;
      employ.number = number;
      employ.designation = designation;
      employ.gender = gender;
      employ.course = course;
      employ.date=dateCreate();
      await employ.save()
      res.status(200).send('ok')
    }catch(err){
        res.status(200).send('ok')
    }
}
const deleteEmploy=async(req,res,next)=>{
    const {id}=req.params;
    try{
      const employ= await Employ.findByIdAndDelete(id);
      res.status(200).send('ok')
    }catch(err){
        res.status(200).send('ok')
    }
}


const createEmploy=async (req,res,next)=>{
    const {name,email,phone,designation,gender, course} =req.body 
    try{
        const newEmploy= await new Employ({
            name:name,
            email:email,
            number:phone,
            designation:designation,
            gender:gender,
            course:course,
            date:dateCreate()
        }).save()
        console.log(newEmploy);
        res.status(200).send('ok')
    }catch(err){
        console.log(err)
        res.status(404).send('notok')
    }
}

const uodateEmploy=async(req,res,next)=>{
    try{

    }catch(err){

    }
}

const adminLogin=async (req,res,next)=>{
   const {username,password}=req.body; 
   console.log(username)
   try{
    const admin= await adminSchem.findOne({user_name:username})
    if(admin){
      const validPassword=await bcrypt.compare(password,admin.password);
       if(validPassword){  
          const jwtToken=jwt.sign({userid:admin._id.toString()},'munisekhar',{expiresIn:'10m'}); 
          res.status(200)
          res.json(jwtToken);
       }else{
          res.status(401).json({status:401,masage:"password not mach"})
       }
    }else{
      res.status(404).json({status:404,masage:"username not found"})
    }
  }catch(err){
    console.log(err)
  }

}

module.exports={
    userData,
    createEmploy,
    uodateEmploy,
    adminLogin,
    employList,
    update,
    deleteEmploy
}