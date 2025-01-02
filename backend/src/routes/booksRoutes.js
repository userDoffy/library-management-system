import express from "express";
import { getAllBooks, addBook } from "../controllers/bookController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";

const router = express.Router();

// Middleware for auth and role-based access
router.get("/", authMiddleware, async (req, res, next) => {
  try {
    await getAllBooks(res, next);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/add",
  authMiddleware,
  roleMiddleware("Admin"), // Only Admin can add books
  async (req, res, next) => {
    try {
      await addBook(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
