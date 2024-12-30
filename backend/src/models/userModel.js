import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["Admin", "User"], default: "User" },
    borrowedBooks: [
      {
        bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Books" },
        borrowedDate: { type: Date },
        dueDate: { type: Date },
        returnedDate: { type: Date },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Users", userSchema);
