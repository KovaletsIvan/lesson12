let http = require("http");
let url = require("url");
let date = require("./myModul");
let static = require("node-static");
let file = new static.Server(".", {
  cache: 0
});

function accept(req, res) {
  if (req.url == "/data.text") {
    (function() {
      file.serve(req, res, date);
      file.serve(date);
    });
  } else {
    file.serve(req, res);
  }
}

http.createServer(accept).listen(6000);
console.log("Server running et http://127.0.0.1:6000 ");
