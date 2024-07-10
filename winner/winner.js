document.addEventListener("DOMContentLoaded", function() {
    // Get the data from who won from the browser session storage that was saved from the fight
    const winnerName = sessionStorage.getItem('winnerName');
    const winnerImage = sessionStorage.getItem('winnerImage');

    document.getElementById('banner').textContent = `${winnerName} WINS !`;
    document.getElementById('winner').src = winnerImage;
});


// difference between browser session and local storage:
// session storage - data is saved/set to specifc browser tab and window. when that tab/window is closed the data is gone
// local storage - data is saved to the browser cache file and is erased when the cache is cleared out