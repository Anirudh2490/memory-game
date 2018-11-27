// Useful selectors shortened
var numberOfPlayers;

$('#startButton').click(function() {
    numberOfPlayers = $('#numberOfPlayers').val();
    console.log(numberOfPlayers);
    window.location.href = "./index.html";
});
