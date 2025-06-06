import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    orderItems: [orderItemSchema],
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["PENDING","CANCELLED","DELIVERED"],
        default: "PENDING",
    }

},{timestamps: true})

export const Order = new mongoose.model("Order",orderSchema)