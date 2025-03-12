import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema({
 
   
  email: { 
    type: String, 
    required: true, 
    
    
  },
  password: { 
    type: String, 
    required: true ,
    
  }
  

},
 
 { 
   timestamps:true
  }
);

userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);
    next();

});

userSchema.methods.comparePassword =  async function (password) {
  
return bcrypt.compare(password, this.password);
  //return this.password
};
const SECRET_KEY = "your_secret_key";

userSchema.methods.generateAccessToken =function(){
  const payload = {
    _id: this._id,
    email: this.email,
   
  }
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn:'1d' });
  //console.log(token)
  console.log("acess")
  return token;
}




const Users = mongoose.model('Users', userSchema);
export default Users