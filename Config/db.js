import mongoose from "mongoose";

const connectDb=async()=>{
   try{
      const conn=mongoose.connect("mongodb://127.0.0.1:27017/Login-signup")
   }
   catch(error){
       console.error(`Error:${error.message}`)
       process.exit(1)
   }
}

export default connectDb;