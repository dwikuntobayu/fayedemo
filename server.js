var http = require('http'),
    faye = require('faye');

var bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 45});

// Handle non-Bayeux requests
var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Faye server for Geeksfarm is running');
});
bayeux.attach(server);
server.listen(8008);
console.log("======================\nServer success running access in \n browser to http://localhost:8008 \nTo exit press 'ctr+c'\nNever Stop Learning Rocking ;)\n======================");
