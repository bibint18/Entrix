import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const uri = process.env.MONGO_URI
    console.log(uri)
    await mongoose.connect(process.env.MONGO_URI!)
    console.log("Database Connected Succesfully")
  } catch (error) {
    console.error('Error connecting MongoDB',error)
    process.exit(1)
  }
}