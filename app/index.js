$(function() {
    $('#send-message').on('click', function() {
        client.publish('/messages', {
          text: 'Hello world'
        });
    });    
});
