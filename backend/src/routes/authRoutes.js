import express from "express";

import { signup, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", (req, res) => {
  signup(req.body, res);
});
router.post("/login", (req, res) => {
    login(req.body,res)
});

export default router;
