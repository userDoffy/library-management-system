import express from 'express'

import { getAllBooks, addBook } from '../controllers/bookController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js';

import {roleMiddleware} from '../middlewares/roleMiddleware.js'

const router = express.Router();

router.get("/", authMiddleware, getAllBooks); // List all books
router.post("/", authMiddleware, roleMiddleware("Admin"), addBook); // Admin adds books

export default router
