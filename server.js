import express from 'express';
import dotenv from 'dotenv';
import connectDB from './connection.js';
import userRoutes from './router/router.js';
import { notfound , errorHandler} from './middleware/test-mw.js';




dotenv.config();
const app = express();
connectDB();
app.use(express.json());
app.use('/api/users',userRoutes);
app.use(notfound);
app.use(errorHandler);
const port = process.env.port || 3000;
app.listen(port,() => {
    console.log(`server running on port ${port}`);
})
