import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import postRouter from "./routes/post.routes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/post', postRouter); 

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});