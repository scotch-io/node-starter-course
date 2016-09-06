require('dotenv').config();

var app = require('./app/server');
var port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log('server is running');
})
