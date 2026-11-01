// const element = document.getElementById("h1")
// const element1 = document.getElementsByTagName("h1")

// // function handclick() {
// //     element.textContent="hello world"
// // }

// element1.onclick = function(){
//     element1.textContent="hello world"
    
// }


// H1 element select
const heading = document.querySelector("#h1");


const list = document.querySelector("#ul");

heading.style.color = "red";

list.style.fontSize = "25px";




heading.style.color = "red";
// heading.addEventListener('click', function() {
// });


const newelement = document.createElement("li")
newelement.innerHTML="hello world"

list.prepend(newelement)