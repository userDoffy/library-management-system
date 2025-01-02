import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./src/config/db.js";
import booksRoutes from "./src/routes/booksRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import transactionRoutes from "./src/routes/transactionRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import { errorMiddleware } from "./src/middlewares/errorMiddleware.js";
import cors from "cors";

const app = express();
const port = 3000;
connectDB();

app.use(express.json());
app.use(cors());



// Routes
app.use("/user/books", booksRoutes);
app.use("/auth", authRoutes);
app.use("/transactions", transactionRoutes);
app.use("/user", userRoutes);


app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
