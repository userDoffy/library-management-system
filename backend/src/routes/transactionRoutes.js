import express from "express";
import { borrowBook, returnBook } from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Borrow a book
router.post("/borrow", authMiddleware, async (req, res, next) => {
  try {
    await borrowBook(req, res, next);
  } catch (error) {
    next(error);
  }
});

// Return a book
router.post("/return", authMiddleware, async (req, res, next) => {
  try {
    await returnBook(req, res, next);
  } catch (error) {
    next(error);
  }
});

export default router;
