import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { connectDB } from './src/config/db.js'
import booksRoutes from './src/routes/booksRoutes.js'
import authRoutes from './src/routes/authRoutes.js'
import { errorMiddleware } from './src/middlewares/errorMiddleware.js'
const app = express()
const port = 3000


connectDB()
app.use('/user/books',booksRoutes)
app.use('/user/auth',authRoutes)

app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
