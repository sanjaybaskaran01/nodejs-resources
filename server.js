const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("Request made");
    // console.log(req)
});

server.listen(3000,'localhost',()=>{
    console.log("Listening for request on port 3000");
})