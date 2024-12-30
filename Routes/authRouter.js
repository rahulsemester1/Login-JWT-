import express from "express";

import  {signUpHandler,loginHandler,profilePage} from "../Controller/userInfo.js"
import verifyToken from "../Middlewares/verifyToken.js";

const router=express.Router()
 
router.post("/login",loginHandler)
router.post("/signup",signUpHandler)
router.post("/profile",verifyToken,profilePage)

export default router