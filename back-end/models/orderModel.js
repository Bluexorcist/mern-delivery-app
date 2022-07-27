import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        clientInfo: {
            firstName: {type: String, required: true},
            lastName: {type: String, required: true},
            email: {type: String, required: true},
            telephone: {type: String, required: true},
            address: {type: String, required: true},
        },
        orderItems: [
        {
            name: {type: String, required: true},
            slug: {type: String, required: true},
            shop: {type: String, required: true},
            price: {type: Number, required: true},
            quantity: {type: Number, required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            }
        }
        ],
        totalPrice: {type: Number, required: true},
    },
    {
        timestamps: true
    }
);


const Order = mongoose.model('Order', orderSchema);
export default Order;