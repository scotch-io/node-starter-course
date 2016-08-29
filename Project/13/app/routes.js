var core = require('./controllers/core');

module.exports = function(app){
    app.get('/', core.home);
    
    app.get('/top', core.top);
    
    app.get('/results', core.results);
    
    app.get('/api/results', function(req, res){
        res.json({message: 'This is the API page'});
    })
}