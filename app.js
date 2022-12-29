const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-type":"text/html"});
  fs.readFile("./index.html", null, (err, data) => {
    res.write(data);
    res.end();
    if(err){console.log(err)}
  })
});
server.listen(8020, ()=> {console.log("8020포트에서 서버 러닝중...")})