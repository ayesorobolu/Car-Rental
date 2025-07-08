import express from 'express';
import "dotenv/config";
import cors from 'cors';
import connectDB from './configs/db.js';
import userRouter from './routes/userRoutes.js';

const PORT = process.env.PORT || 3000;
// Initialize express App 
const app = express()

//connect database
await connectDB()

// Middleware 
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send("server runninig"))
app.use("/api/user", userRouter)

app.listen(PORT, () => console.log(`server running on ${PORT}`))
