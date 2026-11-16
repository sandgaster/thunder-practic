import mongoose from "mongoose";

const studentSchema = new  mongoose.Schema({
    name:{
        type: String ,
        minlength:3,
        maxlength:20,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,

    }
    
},{ timestamps: true })


export const student = mongoose.model("student" , studentSchema)