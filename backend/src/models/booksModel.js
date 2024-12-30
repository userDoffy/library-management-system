import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, unique: true, required: true },
    genre: { type: String, required: true },
    description: { type: String },
    totalCopies: { type: Number, required: true },
    availableCopies: { type: Number, required: true },
    reservedBy: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
        reservedDate: { type: Date },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Books", bookSchema);
