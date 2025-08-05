import express from 'express'
import cors from 'cors'
const app = express()
import bookingRoute from './routes/bookingRoute'
import dotenv from 'dotenv'
import { connectDb } from './config/db'
import { errorHandler } from './middleware/ErrorHandler'
dotenv.config()
app.use(cors())
app.use(express.json())
app.use('/api',bookingRoute)
app.use(errorHandler)
connectDb()
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})