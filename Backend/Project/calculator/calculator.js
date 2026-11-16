const http = require("http");

const server = http.createServer((req, res) => {

    
    

    // URL 
    const parse1 = req.url.split("/");

   
    const operator = parse1[1];
    const num1 = Number(parse1[2]);
    const num2 = Number(parse1[3]);

    let result;

    // Check karo ki numbers valid hain
    if (
        parse1.length !== 4 ||
        parse1[2] === "" ||
        parse1[3] === "" ||
        !Number.isFinite(num1) ||
        !Number.isFinite(num2)
    ) {
        res.statusCode = 400;
        return res.end("Invalid numbers or URL");
    }

    // Addition
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

    // Unknown operator
    else {
        res.statusCode = 404;
        return res.end("Invalid operator");
    }

    // Final result s
    res.end(`Result: ${result}`);

});


server.listen(3000, () => {
    console.log("Calculator server running at http://localhost:3000");
});