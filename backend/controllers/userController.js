import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import  validator  from "validator";

//login user
const loginUser = async(req,res)=>{
    const {email,password}  = req.body
    try {
        const user = await userModel.findOne({email})
        if (!user) {
            res.json({success:false,message:"user doesn't exist"})
            
        }

        const isMatch  = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"password is incorrect"})
        }
        const token = createToken(user._id);
        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }

}


const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}




//register user

const registerUser = async(req,res)=>{
const {name,email,password}  = req.body

try {
    // checking user already exist
    const exist = await userModel.findOne({email})
    if(exist){
        return res.json({success:false,message:"user already exists"})
    }

    // validating email format & strong password
    if(!validator.isEmail(email)){
        return res.json({success:false,message:"needed valid email"})

    }
    //
    if(password.length<8){
        return res.json({success:false,message:"needed strong password"})
    }

    // bycripting user  password
     const salt = await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hash(password,salt)

     const newUser  =  new userModel({
        name:name,
        email:email,
        password:hashedPassword
     })

    const user =  await newUser.save()
    const token = createToken(user._id)
    res.json({success:true,token})


} catch (error) {
    console.log(error)
    res.json({success:false,message:"error"})
}

}

const userList = async(req,res)=>{
    try {
        const users = await userModel.find({})
        res.json({success:true,data:users})


    } catch (error) {
        res.json({success:false,message:error})
        
    }

}
const userUpdate  = async(req,res)=>{
    try {
        const { id } = req.body;
        const { value } = req.body;

        
        await userModel.findByIdAndUpdate(id, { status: value });

        res.json({ success: true, message: "User has been updated" });
        
    } catch (error) {
         res.json({success:false,message:error})
    }
}
export{loginUser,registerUser,userList,userUpdate}