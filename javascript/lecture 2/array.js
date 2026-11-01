const arr = [12, 45, "rjaa", 89, 23];
const arr1 = [12, 45, "rjaa", 89, 23];

// for(let i = 0 ; i< 5 ; i++){
//     console.log(arr[i])
// }



arr[0]= "raja"
for(let item of arr){
    console.log(item)
}


//unshift 

// arr.unshift(1,2,3,4)

// console.log(arr)

// //shift
// arr.shift()
// arr.shift()
// console.log(arr)


// console.log(arr.slice(2,4))
// console.log(arr.splice(2,4 , 17 , 18))

// console.log(arr)

// 2d 

let mark = [
    [1,2,3,4,5],
    [6,7,8,9,0]
]
let index  = 0 
for(let row  of mark ){
    for(let column of row ){
        console.log(column)
    }
}


// split operator 

let arr3 = [...arr, ...arr1]

console.log(arr3)
console.log(arr3.sort((a, b )=>a-b))
console.log(arr3.reverse())
