 let arr = [
  {
    "id": 1,
    "name": "Rahul",
    "email": "rahul@gmail.com",
    "age": 22,
    "skills": ["JavaScript", "React", "Node.js"]
  },
  {
    "id": 2,
    "name": "Aman",
    "email": "aman@gmail.com",
    "age": 24,
    "skills": ["C++", "Java", "MongoDB"]
  },
  {
    "id": 3,
    "name": "Rohit",
    "email": "rohit@gmail.com",
    "age": 20,
    "skills": ["HTML", "CSS", "JavaScript"]
  }
]
function display(item){
    for(let index of item.skills ){
        console.log(index)
    }

}

for(let index of arr){
    display(index)
}

console.log(arr[0].id)