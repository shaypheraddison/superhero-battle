document.addEventListener("DOMContentLoaded", function() {

    const winnerName = sessionStorage.getItem('winnerName');
    const winnerImage = sessionStorage.getItem('winnerImage');

    document.getElementById('banner').textContent = `${winnerName} WINS !`;
    document.getElementById('winner').src = winnerImage;
});