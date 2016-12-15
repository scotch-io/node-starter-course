var db = require('../util/db');
var client = require('../util/twitter');

exports.home = function(req, res){
    db.loadDatabase({}, function(){
        res.render('index', {searches: db.getCollection('searches').data})
    })
}

exports.top = function(req, res){
    db.loadDatabase({}, function(){
        res.render('top', {terms: db.getCollection('top').data})
    })
}

exports.results = function(req, res){
    var query = req.query.q;
    if(query){
        db.getCollection('searches').insert({term: query});
        db.saveDatabase();

        client.get('search/tweets', {q:query}, function(error, tweets, response){
            if(error){
                res.send(error);
            } else {
                res.render('results', {query: query, tweets: tweets.statuses});
            }
        })
    } else {
        res.send('Error');
    }
}