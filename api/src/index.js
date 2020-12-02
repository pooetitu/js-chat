const express = require('express'),
    ws = require('ws'),
    http = require('http'),
    app = express();
// use express static to deliver resources HTML, CSS, JS, etc)
// from the public folder
app.use(express.static('public'));
var httpServer = http.createServer(null, app).listen(3000);
console.log("The HTTP server is up and running");

var wss = new ws.Server({server: httpServer});

wss.on('connection', function (client) {
    client.on('message', function (event) {
        a = JSON.parse(event);
        console.log(a.text);
});
    console.log("A new client was connected.");
});

