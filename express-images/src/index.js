var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello RES labo ");
});

app.get('/test', function (req, res) {
    res.send("Hello RES  - test is working ");
});
app.get('/generateNumbers', function (req, res) {
    res.send(generateRandomNumbers());
});

function generateRandomNumbers() {
    var numberOfNumbers = chance.integer({
        min: 3,
        max: 10
    });

    var numbers = [];
    for (var i = 0; i < numberOfNumbers; ++i) {
        var integerNb = chance.integer({ min: 0, max: 100 });
        var doubleNb = 
        numbers.push({
            integer:integerNb,
            floating:chance.floating({ min: 0, max: 100, fixed: 8 })
        });
        
    }
    console.log(numbers);
    return numbers;

}

app.listen(3000, function () {
    console.log("Acceptin HTTP requests on port 3000");
});
