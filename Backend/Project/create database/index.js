const  express = require("express")
import { json } from "body-parser"
import fs from "fs"

const app = express()
app.use(express.json())

const DBpath = "./Database.txt"

function readDB(){

    const data = fs.readFileSync(DBpath , "utf-8")  // use to read data 
    return json.params(data)
    
}
function writeDB(data){
    fs.writeFileSync(DBpath , JSON.stringify(data , null , 2))

}

app.get("/", (req, res )=>{

})

// fetch customer detailes 
app.get("/user/:accountnumber" , (req, res )=>{
    const accountId = req.params.accountnumber;
    const account = readDB;
})

//account creation 

app.post("/user", (req, res)=>{
    const user = req.body;

})

//delete user data
app.delete("/user" , (req, res )=>{
    const accountId = req.body.accountnumber;
})

// balance update 

app.patch("/user/" , (req, res )=>{
    const balanceupdate = req.body.balance;
    const accountId = req.body.accountnumber;
})





app.listen(3000, (req , res )=>{
    console.log("server is runing in port 3000 ")
})