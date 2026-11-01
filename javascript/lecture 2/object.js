const user = {
    name: "Rahul",
    age: 22,
    city: "Delhi",
    email: "rahul@gmail.com",
    greet : function(){
        console.log("hello")
    }
};

for (let key in user ){
    console.log(key) 
    
}

// add new property

user.add = "hathra "

for (let key in user ){
    console.log(user[key]) 

}

for (let key of Object.entries(user)){
    console.log(key)
}
for (let key of Object.values(user)){
    console.log(key)
}
for (let key of Object.keys(user)){
    console.log(key)
}


