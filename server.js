// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var jsonData = {count: 12, message: 'hey'};
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html'), function(err){
        if(err){
            res.status(500).send(err);
        }
    }
});

app.get('/data', function(req, res){
    res.json(jsonData);
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    } else {
        console.log('App is up and Running in port number ' + port);
    }
});