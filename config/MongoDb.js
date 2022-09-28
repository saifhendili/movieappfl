import mongoose from "mongoose";
import config from "config";
const db = config.get('mongoURI');


const connectDatabase= async() => {
try {
   await mongoose.connect(db,{
        useUnifiedTopology:true,
        useNewUrlParser:true  , 
    });
    console.log("MONGO connected")
  
} catch (error) {
    console.log(`ERROR: ${error.message} `)
    process.exit(1)
}
}
export default connectDatabase;