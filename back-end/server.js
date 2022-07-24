import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('connected to mongoDB')
}).catch(err => {
    console.log(err.message)
});

const app = express();
app.use(express.json())
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRoutes);




const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server start at http://localhost:${port}`)
});
