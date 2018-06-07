var express = require('express');
var formidable = require('formidable');

var app = express();

app.use('/', express.static('lpob-amp'));

app.listen(3000, function () {
  console.log('Server for "LAMPS PLUS OPEN BOX" AMP hackathon listening on port 3000!');
});
