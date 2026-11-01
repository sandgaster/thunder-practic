function add(...arr ){
    let sum = 0 
    for(let index of arr){
        sum += index
    }
    return sum
}

console.log(add(2, 34,2,3,4,6,7,8,9,0,8))


// second method 
const a = function(){
    console.log("hello")
}
a()

// arrow function 

let b = ()=>{
    console.log("jay shree ram")

}