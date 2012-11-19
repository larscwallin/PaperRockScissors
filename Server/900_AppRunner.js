// Generated by CoffeeScript 1.3.3
var app, express;

express = require('express');

app = express();

app.get('/alive.html', function(req, res) {
  var body;
  body = "I'm Alive!";
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  return res.end(body);
});

app.listen(3000);

console.log('Listening on port 3000');
