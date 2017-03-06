var express = require('express');
var app = express();
var randomWord = require("./random");
var randomPhrase = require("./randomPhrase");

app.use(express.static(__dirname + '/public'));


app.get('/random', function(req, res) {
    res.send(randomWord.outlanderWords[Math.floor(Math.random() * randomWord.outlanderWords.length)]);
});

app.get('/randomPhrase', function(req, res) {
    res.send(randomPhrase.outlanderPhrase[Math.floor(Math.random() * randomPhrase.outlanderPhrase.length)]);
});

var myInfo = {
    name: "Andrea",
    age: 44,
    favFood: "tacos"
};

app.get('/myinfo', function(req, res) {
    res.send(myInfo);
});

var list = [{
        name: 'dog',
        price: 100
    },
    {
        name: 'pizza',
        price: 20
    },
    {
        name: 'milk',
        price: 2.50
    }
];

app.get('/thingstobuy',
    function(req, res) {
        res.send(list);
    });

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
});
