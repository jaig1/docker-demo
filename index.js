var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!(version v1.0.2) second attempt');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
