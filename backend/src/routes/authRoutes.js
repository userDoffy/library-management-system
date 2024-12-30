import express from "express";
import { signup, login } from "../controllers/authController.js";

const router = express.Router();

// Use async error handling with next()
router.post("/signup", async (req, res, next) => {
  try {
    await signup(req.body, res);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    await login(req.body, res);
  } catch (error) {
    next(error);
  }
});

export default router;
