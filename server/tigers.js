// TODO: make a new router for the tigers resource
// and make some REST routes for it, exactly like for lions
// make a middleware that just logs the word 'tiger' to the console
// when a request comes in to the server

var tigerRouter = require('express').Router();

var tigers =[];
var id = 0;

tigerRouter.get('/', function(req, res){
    res.join(tigers);
});

tigerRouter.param('id', function(err, req, res, next){
    var tiger = _.find(tigers, {id: id});
    if(tiger){
        req.tiger = tiger;
        next();
    } else {
        res.status(404).send();
    }
});
tigerRouter.get('/:id', function(req, res){
    res.join(req.tiger);
});
module.exports = tigerRouter;