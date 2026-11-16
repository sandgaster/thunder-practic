import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        trim: true,
        required: true
    },

    accountNumber: {
        type: String,
        unique:true,
        required: true
    },

    age: {
        type: Number,
        min: 18,
        max: 100
    },

    balance: {
        type: Number,
        min: 0,
        required: true
    },

    accountType: {
        type: String,
        unique:false,
        required: true
    }

}, { timestamps: true });

// Create and export model
export const customer = mongoose.model("customer", userSchema);