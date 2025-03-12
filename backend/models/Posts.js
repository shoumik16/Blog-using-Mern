import mongoose, { Schema } from "mongoose";
const userSchema = new mongoose.Schema({
 
   
  title: { 
    type: String, 
    required: true, 
    
    
  },
  summary: { 
    type: String, 
    required: true ,
    
  },
  content:{
    type:String,
    required:true
  },
  filePath:{
    type:String
  }
  

},
 
 { 
   timestamps:true
  }
);









const Posts = mongoose.model('Posts', userSchema);
export default Posts