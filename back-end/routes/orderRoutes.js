import express from "express";
import Order from "../models/orderModel.js";

const orderRouter = express.Router();
orderRouter.post('/', async (req, res) => {
    const newOrder = new Order({
        clientInfo: req.body.clientInfo,
        orderItems: req.body.orderItems.map((x) => ({...x, product: x._id})),
        totalPrice: req.body.totalPrice,
    });
    const order = await newOrder.save();
    res.status(201).send({ message: 'New Order Created', order});
});
export default orderRouter;

