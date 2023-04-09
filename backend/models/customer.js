import mongoose from "mongoose";
const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    c_name: {
      type: String,
      required: true,
    },
    gender: String,
    amount: Number,
    loanTenure: Number,
  },
  { timestamps: true }
);
export default mongoose.model("customer", customerSchema);
