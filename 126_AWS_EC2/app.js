const path = require('path');

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'welcome.html');
  res.sendFile(filePath);
});

let testVar = process.env.TEST_ENV || "didn't work"

app.get('/test', (req, res) => {
  res.json(testVar)
})

app.listen(80);
