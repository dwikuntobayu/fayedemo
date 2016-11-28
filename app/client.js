var client = new Faye.Client('http://127.0.0.1:8008/');

client.subscribe('/messages', function(message) {
  alert('Got a message: ' + message.text);
});
