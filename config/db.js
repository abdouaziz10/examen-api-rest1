import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("Connecté à la base de données MongoDB");
  } catch (error) {
    console.error("Erreur de connexion à la base de données:", error);
    process.exit(1);
  }
};

export default connectDB;
