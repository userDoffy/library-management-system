import Books from "../models/booksModel.js";

export const getAllBooks = async (req, res, next) => {
  try {
    const books = await Books.find();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    next(error);
  }
};

export const addBook = async (req, res, next) => {
  try {
    const newBook = await Books.create(req.body);
    res.status(201).json({ success: true, data: newBook });
  } catch (error) {
    next(error);
  }
};
