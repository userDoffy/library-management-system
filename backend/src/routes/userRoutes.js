import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import Users from "../models/userModel.js";

const router = express.Router();

// Get user details
router.get("/me", authMiddleware, async (req, res, next) => {
  try {
    const user = await Users.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

// Update user information
router.put("/me", authMiddleware, async (req, res, next) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(
      req.user.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
});

export default router;
