document.getElementById('yesButton').onclick = function() {
    var msg = document.getElementById('message');
    msg.style.display = 'block'; // Show the message
    this.style.display = 'none'; // Hide the button after clicking
};
