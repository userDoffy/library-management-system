import Transactions from "../models/transactionModel.js";
import Books from "../models/bookModel.js";

export const borrowBook = async (req, res, next) => {
  try {
    const { isbn, userId } = req.body;

    const book = await Books.findOne({ isbn });
    if (!book) {
      return res.status(404).json({ status: "error", message: "Book not found." });
    }

    if (book.availableCopies <= 0) {
      return res.status(400).json({ status: "error", message: "Book is not available." });
    }

    book.availableCopies -= 1;
    await book.save();

    const newTransaction = await Transactions.create({
      userId,
      bookId: book._id,
      borrowedDate: new Date(),
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    });

    res.status(200).json({ status: "success", message: "Book borrowed successfully!", data: newTransaction });
  } catch (error) {
    next(error);
  }
};

export const returnBook = async (req, res, next) => {
  try {
    const { isbn, userId } = req.body;

    const book = await Books.findOne({ isbn });
    if (!book) {
      return res.status(404).json({ status: "error", message: "Book not found." });
    }

    const transaction = await Transactions.findOne({ userId, bookId: book._id, status: "Borrowed" });
    if (!transaction) {
      return res.status(400).json({ status: "error", message: "No active borrow transaction found." });
    }

    book.availableCopies += 1;
    await book.save();

    transaction.status = "Returned";
    transaction.returnedDate = new Date();
    await transaction.save();

    res.status(200).json({ status: "success", message: "Book returned successfully!", data: transaction });
  } catch (error) {
    next(error);
  }
};
