import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact-me', (req, res) => {
  res.send('Contact Page');
});

app.get('*', (req, res) => {
  res.send('Error');
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
