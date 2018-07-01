var express = require('express');
var app = express();

app.get('/', function (req, res) {
<<<<<<< HEAD
  res.send('Hello World!(version v1.0.2)');
=======
  res.send('Hello World (v1.0.2)!');
>>>>>>> 06747d8e172014bfddbca8f7bdfe5c634ed2262f
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
