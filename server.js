const express = require('express');
const app = express();
const port = 3777;

app.use(express.static(__dirname));
app.listen(port);
console.log(`Listening on: ${port}`);