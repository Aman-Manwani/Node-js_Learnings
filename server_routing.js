const http = require("http")

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url==="/")
    {
        res.end("hello from home page");
    }else
    if(req.url==="/about")
    {
        res.end("hello from about page");
    }else
    if(req.url==="/contact")
    {
        res.end("hello from contact page");
    }else{
        // to change the response code and content type of the page rendering
        res.writeHead(404, { "content-type": "text/html" } );
        res.end("<h1>Error ! page not found</h1>");
    }
});

server.listen(3002,"127.0.0.1", () =>{
    console.log("listening to port 3002");
})