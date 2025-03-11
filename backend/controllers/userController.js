import  asyncHandler from "../utils/asyncHandler.js";
import Users from '../models/Users.js'
import CustomError from '../utils/apierror.js'
import ApiResponse from '../utils/ApiResponse.js'
import cookieParser from "cookie-parser";
import jwt from 'jsonwebtoken'
const gentoken = asyncHandler(async (id) => {
    try {
        const user = await Users.findById(id);
        const accestoken = await user.generateAccessToken();
        
         
        
        return { accestoken };
    } catch (error) {
        throw new CustomError(500, "wrong in reftoken");
    }
});


const registerUser=asyncHandler(async(req,res)=>{
    const {  email, password } = req.body
    if([email,password].some(field => field.error === ""))
        throw new CustomError(400,"all field required")

    const existUser=await Users.findOne({ $or: [{ email }] })
   if(existUser) throw new CustomError(420,"this user already exists")


   const user =await Users.create({
   
    email,
    password,
   
    
})
const createdUser=await Users.findById(user._id)
if(!createdUser)
    throw new CustomError(505,"wrong registration")

return res.status(201).json(
new ApiResponse(200,createdUser,"successfully")
)
}) 

const loginUser=asyncHandler(async(req,res)=>{
    const { email,password } = req.body
   const user= await Users.findOne({
        $or: [
          {email}
        ]
      })
      if(!user) throw new CustomError(404," user does not exist")
        const ispasswordcorrect=await user.comparePassword(password)
       if(!ispasswordcorrect)
        throw new CustomError(401,"wrong info")
       const { accestoken }=await gentoken(user._id)
       const loggeduser=await Users.findById(user._id).select("-password")
       res.cookie("accessToken", accestoken, { httpOnly: true, secure: true}).json({id:user._id,email}); 
 //return res.status(200).json({msg:'ok'});
})
const profile=asyncHandler(async(req,res)=>{
   const token=req.cookies.accessToken||req.header("Authorization")?.replace("Bearer ","")
   console.log("why")
   
   
   const SECRET_KEY = "your_secret_key";
   try {
    
    const decoded = jwt.verify(token, SECRET_KEY);
       req.user=decoded
       
     res.json(req.user)
   
} catch (err) {
    console.error("Invalid or expired token:", err.message);
}
   //res.json(req.cookies)
})
const logout=asyncHandler(async(req,res)=>{
    const token=req.cookies.accessToken
    console.log("before token:",token)
    res.cookie("accessToken",'').json('okk')
    console.log("xxx")
})
export {registerUser,loginUser,profile,logout}