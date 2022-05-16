let express = require('express');
let app = express();
const absolutePath = __dirname + "/views/index.html";
app.get('/', (req, res) => {
  res.sendfile(absolutePath);
})


































 module.exports = app;
