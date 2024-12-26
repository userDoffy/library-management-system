import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { connectDB } from './src/config/db.js'
import booksRoutes from './src/routes/booksRoutes.js'
import authRoutes from './src/routes/authRoutes.js'
import { errorMiddleware } from './src/middlewares/errorMiddleware.js'
import cors from "cors";

const app = express()
const port = 3000
app.use(express.json());
app.use(cors());

connectDB()
app.use('/user/books',booksRoutes)
app.use('/auth',authRoutes)

app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
