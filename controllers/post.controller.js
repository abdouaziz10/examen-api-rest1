import PostModel from "../models/post.model.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const setPosts = async (req, res) => {
  if (!req.body.message) {
    return res.status(400).json({ message: "Le champ message est absent" });
  }

  try {
    const post = await PostModel.create({
      message: req.body.message,
      author: req.body.author,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  try {
    const updatePost = await PostModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.userId } },
      { new: true }
    );
    res.status(200).json(updatePost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};