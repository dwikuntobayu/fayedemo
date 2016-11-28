client.subscribe('/messages', function(message) {
    alert('Got a message: ' + message.text);
});
