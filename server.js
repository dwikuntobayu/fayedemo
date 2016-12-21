var http = require('http'),
    express = require('express'),
    faye = require('faye');

var bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 45});

var app = express();
var server = http.createServer(app);
// Handle non-Bayeux requests
//var server = http.createServer(function(request, response) {
//  response.writeHead(200, {'Content-Type': 'text/plain'});
//  response.end('Faye server for Geeksfarm is running');
//});
bayeux.attach(server);

bayeux.on('handshake', function(clientId) {
    console.log('Client connected', clientId);
});

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/app/index.html');
});

app.get('/user2', function(req, res) {
    res.sendfile(__dirname + '/app/user2.html');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.send(500);
});

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

server.listen(8008);
console.log("======================\nServer success running access in \n browser to http://localhost:8008 \nTo exit press 'ctr+c'\nNever Stop Learning Rocking ;)\n======================");
