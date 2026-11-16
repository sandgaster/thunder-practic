import express from "express"
import router from "./src/routes/studenRoute.js";
import connectDB from "./src/config/db.js";



const app  = express();
connectDB();
app.use(express.json())

app.use("/students" , router)



app.listen(3000, (req, res )=>{
    console.log("server is run in port 3000")
})