import mongoose from "mongoose";
const transactionsSchema = mongoose.Schema(
  {
    _id: "ObjectId",
    userId: { type: "ObjectId", ref: "Users", required: true },
    bookId: { type: "ObjectId", ref: "Books", required: true },
    borrowedDate: { type: "Date", default: "Date.now" },
    dueDate: { type: "Date", required: true },
    returnedDate: "Date",
    status: {
      type: "String",
      enum: ["Borrowed", "Returned"],
      default: "Borrowed",
    },
  },
  { timestamps: true }
);
export default mongoose.model("Transactions", transactionsSchema);
