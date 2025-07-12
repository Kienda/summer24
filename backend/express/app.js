import express from 'express';
const app = express();
const PORT = 1800;

app.get('/', (req, res) => {
  res.send("<h1> Hello, welcome to my first app");
})

app.get('/contact', (req, res) => {
  res.send("Welcome to my contact page");
})

app.get('/about', (req, res) => {
  res.send("Welcome to my about page");
})
app.listen(PORT, () => {
  console.log(`The server is ranning on Port: http://localhost:${PORT}`)
});