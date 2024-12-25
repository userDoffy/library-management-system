import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    _id: "ObjectId",
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    role: { type: "String", enum: ["Admin", "User"], default: "User" },
    borrowedBooks: [
      {
        bookId: "ObjectId",
        borrowedDate: "Date",
        dueDate: "Date",
        returnedDate: "Date",
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("Users", userSchema);
