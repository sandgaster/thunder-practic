import mongoose from "mongoose";

async function connectDB(){

    try{

        
        await mongoose.connect("/bankdetailes")
        console.log("mongodb connection sueccfully")
    } catch(e){
        console.log("mongodb not connected ")
    }
}

export default connectDB