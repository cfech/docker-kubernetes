const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//   res.send(`
//     <h1>Hello from this NodeJS app!</h1>
//     <h1>An updated image</h1>
//     <p>Try sending a request to /error and see what happens</p>
//   `);
// });

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from this NodeJS app! - declarative</h1>
    <h1>An Update </h1>
    <p>Try sending a request to /error and see what happens</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
