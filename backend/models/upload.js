import mongoose from "mongoose";
const Schema = mongoose.Schema;

const uploadSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
      type: String,
    },
  },
  {
    collection: "Upload",
  }
);

export default mongoose.model("Upload", uploadSchema);
