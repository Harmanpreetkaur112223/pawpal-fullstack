import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
import dotenv from 'dotenv'
dotenv.config({path:'./config/.env'})

// form and body
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(cors({ origin: "http://localhost:5173" }))
app.use(cookieParser())


import DogRouter from './routes/dog.router.js'
import UserRouter from './routes/user.router.js'
import OrderRouter from './routes/order.router.js'

app.use('/api/v1/Dog',DogRouter)
app.use('/api/v1/user',UserRouter)
app.use('/api/v1/order',OrderRouter)

// module.exports = app
export default app;