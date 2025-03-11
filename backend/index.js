import app from './app.js'
import connectDB from './db/index.js';
const PORT = 5001


const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  };
  
  startServer();
console.log("xxxx")