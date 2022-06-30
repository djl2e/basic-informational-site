import { createServer } from 'http';
import fs from 'fs';
import { URL } from 'node:url';


const server = createServer((req, res) => {
  const reqUrl = new URL(req);
  const path = reqUrl.pathname;

  fs.readFile(`./${path}.html`, 'utf8', (err, data) => {
    if (err) {
      fs.readFile('./404.html', 'utf8', (err, data) => {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      })
      return;
    }
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end(data);
  })
})

server.listen(8000);
