import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    minlength: 5 
  },
  author: {
    type: String,
    required: true,
  },
  likers: {
    type: [String],
    default: [],
  }
}, { timestamps: true });

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;