const http = require("http")
const url = require("url")

const server = http.createServer((req, res)=>{
    const data = url.parse(req.url ,true)

    const operator = data.pathname.slice(1)
    const num1 = Number(data.query.num1);
    const num2 = Number(data.query.num2);

    let result = 0 
    if (operator === "add") {
        result = num1 + num2;
    }

    // Subtraction
    else if (operator === "sub") {
        result = num1 - num2;
    }

    // Multiplication
    else if (operator === "mul") {
        result = num1 * num2;
    }

    // Division
    else if (operator === "div") {

        if (num2 === 0) {
            res.statusCode = 400;
            return res.end("Cannot divide by zero");
        }

        result = num1 / num2;
    }

    res.end(`${result}`)









})

server.listen(3000,()=>{
    console.log("server is start in port 3000")
})