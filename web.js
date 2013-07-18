var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var k = fs.readFileSync('./index.html');

buf = new Buffer(k);

app.get('/', function(request, response) {
  response.send(buf.toString());
});

Var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
