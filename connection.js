import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
       console.log("mongoDB connected!");

    }catch (error) {
        console.error("mongoDB connection failed :",error.message);
        process.exit(1)
    }
}; 
export default connectDB;