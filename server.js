import express from "express";

import router from "./Routes/authRouter.js";
import connectDb from "./Config/db.js";

const app=express();
const port=3000;

//Connect to MongoDb
connectDb();

app.use(express.json());
app.use("/api/v1",router)     


app.listen(port,()=>{
   console.log(`App is listening at port ${port}`)
})