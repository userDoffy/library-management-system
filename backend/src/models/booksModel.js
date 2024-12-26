import mongoose from "mongoose";
const bookSchema = mongoose.Schema(
  {
    title: { type: "String", required: true },
    author: { type: "String", required: true },
    isbn: { type: "String", unique: true, required: true },
    genre: { type: "String", required: true },
    description: "String",
    totalCopies: { type: "Number", required: true },
    availableCopies: { type: "Number", required: true },
    reservedBy: [{ userId: "ObjectId", reservedDate: "Date" }],
  },
  { timestamps: true }
);
export default mongoose.model("Books", bookSchema);
