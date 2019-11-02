let http = require('http');

var server = http.createServer((req, res) => {
    res.end("hello wolrd");
});

server.listen(3000, ()=>(console.log("Server is active on 3000")));


