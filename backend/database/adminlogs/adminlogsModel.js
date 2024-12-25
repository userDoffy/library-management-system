import mongoose from "mongoose";
const adminlogsSchema = mongoose.Schema(
  {
    _id: "ObjectId",
    adminId: { type: "ObjectId", ref: "Users", required: true },
    action: { type: "String", required: true },
    details: "String",
  },
  { timestamps: true }
);
export default mongoose.model("Adminlogs", adminlogsSchema);
