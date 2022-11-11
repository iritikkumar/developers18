import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
    desc:{
        type: String,
        required: true,
    }
  },
  { timeStamps: true }
);

export default mongoose.model("Comment", CommentSchema);
