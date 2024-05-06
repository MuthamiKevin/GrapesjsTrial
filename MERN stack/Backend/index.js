var express = require('express');
var app = express();
var path = require('path');

// Bootstrap the App
require('./src/bootstrap')(app, __dirname, express);

// Serve GrapeJS files from node_modules
app.use('/grapejs', express.static(path.join(__dirname, 'node_modules', 'grapejs')));

// Define route for the homepage
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

function listen() {
    var server = app.listen(app.get('port'), function() {
        require('./src/init').init();
        console.log('Magic happens on port ' + server.address().port);
    });
}
listen();
