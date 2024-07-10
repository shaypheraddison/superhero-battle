const images = {
    victory: {
        allMight: "../resources/winner-images/all-might-victory.png",
        bane: "../resources/winner-images/bane-victory.png",
        captainAmerica: "../resources/winner-images/captain-america-victory.png",
        doctorDoom: "../resources/winner-images/doctor-doom-victory.png",
        donatello: "../resources/winner-images/donatello-victory.png",
        enchantress: "../resources/winner-images/enchantress-victory.png",
        harleyQuinn: "../resources/winner-images/harley-quinn-victory.png",
        kyloRen: "../resources/winner-images/kylo-ren-victory.png",
        loki: "../resources/winner-images/loki-victory.png",
        masterChief: "../resources/winner-images/master-chief-victory.png",
        moonKnight: "../resources/winner-images/moon-knight-victory.png",
        redHood: "../resources/winner-images/red-hood-victory.png",
        sauron: "../resources/winner-images/sauron-victory.png",
        scarletSpider: "../resources/winner-images/scarlet-spider-victory.png",
        spiderGwen: "../resources/winner-images/spider-gwen-victory.png",
        stockLeft: "../resources/winner-images/stock-fighter-left-victory.png",
        stockRight: "../resources/winner-images/stock-fighter-right-victory.png",
        storm: "../resources/winner-images/storm-victory.png",
        ultron: "../resources/winner-images/ultron-victory.png",
        vegeta: "../resources/winner-images/vegeta-victory.png"
    }
};



document.addEventListener("DOMContentLoaded", function() {
    // Get the data from who won from the local storage that was saved from the fight
    const winnerName = localStorage.getItem('winnerName');
    const winnerImage = localStorage.getItem('winnerImage');

    console.log('Loaded Winner Name:', winnerName);
    console.log('Loaded Winner Image:', winnerImage);

    if (winnerName && winnerImage) {
        document.getElementById('banner').textContent = `The winner is: ${winnerName}`;
        document.getElementById('winner').src = winnerImage;
    } else {
        console.log('Winner data not found in sessionStorage.');
    }
});
