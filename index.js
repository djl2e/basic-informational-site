import { createServer } from 'http';
import fs from 'fs';

const server = createServer((req, res) => {
  const path = req.url;
  const files = {
    '/': './index.html',
    '/about': './about.html',
    '/contact-me': './contact-me.html',
    'error': './404.html',
  };

  if (path in files) {
    fs.readFile(`${files[path]}`, 'utf8', (err, data) => {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/html');
      res.end(data);
    })
  } else {
    fs.readFile(`${files['error']}`, 'utf8', (err, data) => {
      res.statusCode = 404;
      res.setHeader('Content-type', 'text/html');
      res.end(data);
    })
  }
})

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
