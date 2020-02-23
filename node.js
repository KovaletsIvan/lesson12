let http = require("http");
let url = require("url");
let static = require("node-static");
let file = new static.Server(".", {
  cache: 0
});

function accept(req, res) {
  if (req.url == "/data.text") {
    (function() {
      file.serve(req, res);
    });
  } else {
    file.serve(req, res);
  }
}

http.createServer(accept).listen(5000);
console.log("Server running et http://127.0.0.1:5000 ");
