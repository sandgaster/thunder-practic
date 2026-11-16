const express = require("express")

const app = express()
const database = [
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

app.use(express.json())

app.get("/user" , (req, res)=>{
    res.send("hello how are you ")

})

//filter 

app.get("/user/:id" , (req, res)=>{
    const id = Number(req.params.id)
    if (id < 0 || id >= database.length){
        res.send("data is not avalable")
    }
    res.json(database[id])

});
// query 
// 3. Filter users using Query Params
app.get("/users", (req, res) => {

    const age = Number(req.query.age);

    const filterdata = database.filter((item) => {
        return item.age >= age;
    });

    res.json(filterdata);
});


app.listen(3000, ()=>{
    console.log("server is start in port 3000")
})