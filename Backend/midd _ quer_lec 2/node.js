const http = require("http");

const server = http.createServer((req, res) => {

    // GET request
    if (req.method === "GET" && req.url === "/user") {

        res.end("Method is GET");
    }

    // POST request
    else if (req.method === "POST" && req.url === "/user") {

        let body = "";

        // Request body ka data collect karna
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        // Jab poora data aa jaye
        req.on("end", () => {

            const user = JSON.parse(body);

            res.setHeader("Content-Type", "application/json");
            const userdata = user.find((item)=>{
                return item.age === 35
            })
            res.end(JSON.stringify(userdata));
        });
    }

    else {
        res.statusCode = 404;
        res.end("Route not found");
    }

});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});