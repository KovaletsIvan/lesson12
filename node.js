let http = require("http");
http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(req.url);
    res.end("Hello Ivan");
  })
  .listen(5000);
console.log("Server running et http://127.0.0.1:5000 ");
