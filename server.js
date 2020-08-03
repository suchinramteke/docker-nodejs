const express = require("express");
const app = express();
const hostname = '127.0.0.1';
const port = 3000;
// const fileUpload = require('express-fileupload');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// app.use(cors()); 
// app.use(fileUpload()); 
// var apiRouter = require('./routes/api');

var apiRouter = require('./routes/api');
app.use('/api', apiRouter); 

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/', (req, res) => {
    res.json("welcome")
})
