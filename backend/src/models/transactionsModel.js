import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Books", required: true },
    borrowedDate: { type: Date, default: Date.now },
    dueDate: { type: Date, required: true },
    returnedDate: { type: Date },
    status: { type: String, enum: ["Borrowed", "Returned"], default: "Borrowed" },
  },
  { timestamps: true }
);

export default mongoose.model("Transactions", transactionSchema);
