import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        slug: { type: String, required: true, unique: true},
        description: { type: String, required: true},
        shop: { type: String, required: true},
        name: { type: String, required: true, unique: true},
        price: { type: Number, required: true},
        img: { type: String, required: true}
    },
    {
        timestamps: true
    }
    );

const Product = mongoose.model('Product', productSchema);
export default Product;