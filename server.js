
const express = require('express');

const port = process.env.PORT || 5000;
const app = express();
const path = require('path');
const serveStatic = require('serve-static');

app.use(serveStatic(__dirname + '/dist'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/dist/index.html'))
})

app.listen(port);
console.log('server started '+ port);