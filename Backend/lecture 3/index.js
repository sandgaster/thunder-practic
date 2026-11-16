import express, { json } from "express";
import mongoose from "mongoose";
import { customer } from "./Schema.js";

const app = express()       
app.use(express.json())
                                                                                                   // bankdetailes is a database name 

// Connect MongoDB
async function connection() {
    try {
        await mongoose.connect("/bankdetailes");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Database connection error:", error);
    }
}                                                                                      

connection()

// app.use((req, res , next)=>{
//     console.log(req.body)

// })

// create user 
app.post("/customer", async (req, res)=>{
    

    const data1 = await customer.create(req.body)
    
    res.json(data1)
});

//fetch data 
app.get("/customer", async (req, res)=>{
    

    const dat = await customer.find({
         age: { $gte: 25 }
    })
    
    res.json(dat)
});

app.listen(3000,()=>{
    console.log("server is start in port 3000")
})