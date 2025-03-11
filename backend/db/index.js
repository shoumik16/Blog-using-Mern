import mongoose from "mongoose";
const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/Blogs', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected successfully!");
    } catch (err) {
      console.error("Error connecting to MongoDB:", err.message);
      process.exit(1); // Exit process if connection fails
    }
  };
  export default connectDB