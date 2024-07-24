const winnerName1 = sessionStorage.getItem("winnerNameP1");
const winnerName2 = sessionStorage.getItem("winnerNameP2");
const winnerName = sessionStorage.getItem("winnerName");
const winnerImage = sessionStorage.getItem("winnerImage");
const winningPlayer = sessionStorage.getItem("winningPlayer");

if (winnerName1 === winnerName2) {
    document.getElementById('banner').textContent = `${winnerName1} (${winningPlayer}) WINS !`;
    document.getElementById('winner').src = winnerImage;
} else if (winnerName1 === winnerName) {
    document.getElementById('banner').textContent = `${winnerName1} WINS !`;
    document.getElementById('winner').src = winnerImage;
} else if (winnerName2 === winnerName) {
    document.getElementById('banner').textContent = `${winnerName2} WINS !`;
    document.getElementById('winner').src = winnerImage;
};
