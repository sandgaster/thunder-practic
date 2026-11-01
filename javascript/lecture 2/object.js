const user = {
    name: "Rahul",
    age: 22,
    city: "Delhi",
    email: "rahul@gmail.com"
};

for (let key in user ){
    console.log(key) 
    
}

// add new property

user.add = "hathra "

for (let key in user ){
    console.log(user[key]) 

}