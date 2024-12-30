import jwt from "jsonwebtoken";
import apiResponse from "../Utils/apiResponse.js";

let verifyToken=(req,res,next)=>{
      const token=req.headers.authorization?.split(" ")[1];
      debugger
      if(!token){
         return apiResponse(res,404,false,"No token provided")
      }

      try{
         let decoded=jwt.verify(token,"rarashna5");
         req.user=decoded;
         next();
      }catch (error) {
         return apiResponse(res,403,false,"Invalid or expired token")
      }
}

export default verifyToken