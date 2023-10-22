const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      path += "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    }
  });
});

server.listen(8080, () => {
  console.log("Server is waiting request on port 8080");
});
