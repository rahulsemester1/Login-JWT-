import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import Signup from "../Models/signup.js"
import apiResponse from "../Utils/apiResponse.js";


let secret="rarashna5";

let tokenGeneration=(name,email)=>{                         //Token generation defination  
    return jwt.sign({name:name,email:email},secret,{expiresIn:"30d"})
}

// Login

let loginHandler=async(req,res)=>{
   const{name,email,password}=req.body;
   try{
   let user=await Signup.findOne({email});
   if(!user){
      return apiResponse(res,404,false,"User not found");
   }

   const isPasswordValid=await bcrypt.compare(password,user.password)
   if(!isPasswordValid){
      return apiResponse(res,400,false,"Invalid Credentials")
   }
   else{                      
      return apiResponse(res,200,true,"login Successfull",{        
      name:name,
      email:email,
      token:tokenGeneration(name,email)                       //token generation call
      }) 
   }}
   catch(error){
      return apiResponse(res,500,false,"Internal server error",null,error.message)
   }
}

// Signup

let signUpHandler=async(req,res)=>{
   const{name,email,password}=req.body;
   try{
   const existUser=await Signup.findOne({password});
    if(existUser){
      return apiResponse(res,400,false,"User Already Exist")
    }   

   const hashedPassword = await bcrypt.hash(password,10);
   
      const user=await Signup.create({name,email,password:hashedPassword})
        return apiResponse(res,201,true,"User registered successfully",{
         name: user.name,
         email: user.email,
      })
  }catch(error){
       return apiResponse(res,500,false,"Internal Server Error",null,error.message)
  }
}

// Profile Page

let profilePage=(req,res)=>{
   const userId = req.user.email; // Assuming the token contains { id, email }
   return apiResponse(res,200,true,"User profile accessed",userId)
}

export {loginHandler,signUpHandler,profilePage};