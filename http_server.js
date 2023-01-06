const http = require("http")

const server = http.createServer((req,res)=>{
    res.end("hello here is aman manwani");
});

server.listen(3002,"127.0.0.1", () =>{
    console.log("listening to port 3002");
})