const express = require("express")

const app = express()

const ver = true
app.use("/problem" , (req,res,next)=>{
    if(!ver){

        res.send("first login  ")
    }
    else{
        next()

    }

    app.get("/problem/:id" , (req , res)=>{
        res.send(`this is youer problem statement ${req.params.id}`)
    })
})


app.listen(3000, ()=>{
    console.log("server is start in port 3000")
});