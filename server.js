var express = require('express');
var app = express();
var randomWord = require("./random");
var randomPhrase = require("./randomPhrase");


app.get('/random', function(req,res) {
  res.send(randomWord.outlanderWords[Math.floor(Math.random() * randomWord.outlanderWords.length)]);


});

app.get('/randomPhrase', function(req,res) {
  res.send(randomPhrase.outlanderPhrase[Math.floor(Math.random() * randomPhrase.outlanderPhrase.length)]);

});

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
