

const header1 = document.createElement("h1");


header1.innerText = "hello world";


header1.style.fontSize = "30px";
header1.style.backgroundColor = "red";
header1.style.color = "white";


const body1 = document.getElementsByTagName("body")[0];


body1.appendChild(header1);

// react 
const react ={
    createElement: function (tag , styles , children) {
        const element = document.createElement(tag)

        for(let key in styles){
            element.style[key] = styles[key]
        }

        element.innerText = children;

        
        return element;
        
    }
}

const header2 = react.createElement('h1', {fontSize:"30px" ,backgroundColor:"yellow"} , "hello ")
body1.appendChild(header2);