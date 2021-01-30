const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/css', express.static('public/styles.css'));

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
})