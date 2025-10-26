import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect("mongodb+srv://mrksht29_db_user:t9lYXXvalwVLmkCg@cluster0.kxzrfbi.mongodb.net/");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", (error as Error).message);
    process.exit(1);
  }
};

export default connectDB;