import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
// Initialize express App 
const app = express()

// Middleware 
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send("server runninig"))

app.listen(PORT, () => console.log(`server running on ${PORT}`))
