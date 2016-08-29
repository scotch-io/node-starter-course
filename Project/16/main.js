require('dotenv').config();

var app = require('./app/server');

app.listen(8080, function(){
    console.log('server is running');
})