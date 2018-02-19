const express = require('express')
const app = express()
var path = require('path');

console.log(path.join(__dirname))

app.get('/admin/*', function (req, res, next) {
    console.log('1', req.url)
    // res.sendFile(path.join(__dirname, '/index.html')); // load the single view file (angular will handle the page changes on the front-end)
    req.url = req.url.substr(6);
    next();
});

app.use(express.static(path.join(__dirname)));

app.get('*/', function (req, res) {
    console.log('2', req.path)
    console.log('2', req.url)
    res.sendFile(path.join(__dirname, '/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(4201, function () {
    console.log('Example app listening on port 4201! :D')
})