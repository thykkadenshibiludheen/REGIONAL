import express from 'express'
import cors from "cors"
import { connectDB } from './config/db.js'
import productRouter from './routes/productRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import categoryRoute from './routes/categoryRoute.js'

// app config

const app = express()
const port = 4000

////middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB()
// api endpoint
app.use("/api/product",productRouter)
app.use("/images",express.static('uploads'))
app.use('/categoryImage',express.static('uploadCategory'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.use('/api/category',categoryRoute)
app.get("/",(req,res)=>{
res.send("API working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})
