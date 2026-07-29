import express from "express";
import { getPosts, setPosts, likePost } from "../controllers/post.controller.js";

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.post("/", setPosts);
postRouter.patch("/likepost/:id", likePost);

export default postRouter;