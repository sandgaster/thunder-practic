let a = 10 ; 
const b = 40 ;
var c = 45 ; 

// b = 30 ;
a= 45;
c = 39 ;
console.log(a)
console.log(b)
console.log(c)

// data types 
let str = `hello how are you ${a}`
console.log(str)
console.log(`hello how ${str}`)

let d = Symbol("s1")
let e = Symbol("s1")

console.log(d == e)


// non primitive

let arr = [21, 34 ,78, 45]
let obj  = {
    name : "rohit ", 
    age : 20 
}

let obj1 = obj

let obj2 = {
    name : "rohit ", 
    age : 20 
}

console.log(obj == obj1)
console.log(obj == obj2)

// console.log(typeof (arr))
// console.log(typeof (obj))


// Conditional if else statement 

a = 30 

let result =  a > 18 ? "adult " : "child"
console.log(result ) 


a= -30

// math function 
console.log(a)
console.log(Math.abs(a))
console.log(Math.floor(-2 , a))



console.log(Math.floor(Math.random()*(48 - 37 +1)+37))