var express = require('express');
var app = express();
var middleware = require('./middleware.js');
var port = process.env.PORT || 3000;

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', function(req, res) {
    res.send('about page');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('server is running on port ' + port);
});