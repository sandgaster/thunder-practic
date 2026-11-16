const http = require("http")
// import users from "./Data.js";

const  users = [
    {
        name: "Rahul",
        age: 22,
        photo: "https://i.pravatar.cc/150?img=12"
    },
    {
        name: "Priya",
        age: 24,
        photo: "https://i.pravatar.cc/150?img=47"
    },
    {
        name: "Aman",
        age: 21,
        photo: "https://i.pravatar.cc/150?img=13"
    },
    {
        name: "Sneha",
        age: 23,
        photo: "https://i.pravatar.cc/150?img=44"
    },
    {
        name: "Vikash",
        age: 25,
        photo: "https://i.pravatar.cc/150?img=14"
    }
];


const server = http.createServer((req , res)=>{
    const parse1 = Number(req.url.split(1))

    if(parse1 < 0){
        res.end("invalid url")
    }
    const data = JSON.stringify(users[parse1]);
    res.end(data)
    
})


server.listen(3000, ()=>{
    console.log("hello world")
})