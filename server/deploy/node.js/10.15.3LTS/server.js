"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = require("http");
var path = require("path");
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static((path.join(__dirname, 'public'))));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'www/index.html'));
});
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
//# sourceMappingURL=server.js.map