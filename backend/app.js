import express from "express"
import userRoute from './routes/userRoute.js'
import cors from 'cors'
import cookieParser from "cookie-parser"
const app=express()
app.use(cookieParser());
app.use(
    cors({
      
      origin: "http://localhost:5175", // Replace with your frontend URL
      credentials: true,
       // Allow cookies and authentication headers
    })
  );
  
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/user",userRoute)
export default app