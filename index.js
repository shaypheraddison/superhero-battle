// player radio buttons and fight button
const radioButtons = document.querySelectorAll("input[name='player']");
const fightButton = document.getElementById("button");

// player-character choice
const selectedNameP1 = document.getElementById("p1-character");
const selectedNameP2 = document.getElementById("p2-character");
const playerChoices = document.querySelectorAll(".pic-container");
const player1Image = document.getElementById("player-1-img");
const player2Image = document.getElementById("player-2-img");
const player1StatsBox = document.querySelectorAll("li.p1-ps");
const player2StatsBox = document.querySelectorAll("li.p2-ps");

let currentPlayer = "";

// character images
const images = {
    profiles: {
        allMight: "resources/profile-images/all-might-prof.png",
        bane: "resources/profile-images/bane-prof.png",
        captainAmerica: "resources/profile-images/captain-america-prof.png",
        doctorDoom: "resources/profile-images/doctor-doom-prof.png",
        donatello: "resources/profile-images/donatello-prof.png",
        enchantress: "resources/profile-images/enchantress-prof.png",
        harleyQuinn: "resources/profile-images/harley-quinn-prof.png",
        kyloRen: "resources/profile-images/kylo-ren-prof.png",
        loki: "resources/profile-images/loki-prof.png",
        masterChief: "resources/profile-images/master-chief-prof.png",
        moonKnight: "resources/profile-images/moon-knight-prof.png",
        redHood: "resources/profile-images/red-hood-prof.png",
        sauron: "resources/profile-images/sauron-prof.png",
        scarletSpider: "resources/profile-images/scarlet-spider-prof.png",
        spiderGwen: "resources/profile-images/spider-gwen-prof.png",
        stockLeft: "resources/profile-images/stock-fighter-left-prof.png",
        stockRight: "resources/profile-images/stock-fighter-right-prof.png",
        storm: "resources/profile-images/storm-prof.png",
        ultron: "resources/profile-images/ultron-prof.png",
        vegeta: "resources/profile-images/vegeta-prof.png"
    },
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

const characterNames = [
    "Bane", 
    "Captain America", 
    "Doctor Doom", 
    "Donatello", 
    "Enchantress", 
    "Harley Quinn", 
    "Kylo Ren", 
    "Loki", 
    "Master Chief", 
    "Moon Knight", 
    "Red Hood",
    "Sauron",
    "Scarlet Spider",
    "Spider-Gwen",
    "Storm", 
    "Ultron",
    "Vegeta"
];

function updateCurrentPlayer() {
    radioButtons.forEach(function(button) {
        button.addEventListener("change", function(event) {
            currentPlayer = event.target.value;
        });
    });
};

async function getCharacterStats(names) {
    const apiUrl = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`;
    const response = await fetch(apiUrl);
    const jsonData = await response.json();

    const characterData = {};
    characterData["All Might"] = {
        id: 1,
        name: "All Might",
        powerstats: {
            "combat": 93,
            "durability": 100,
            "intelligence": 41,
            "power": 100,
            "speed": 67,
            "strength": 93
        }
    };

    for (const name of names) {
        const character = jsonData.find(character => {
            return character.name === name; 
        });
        if (character) {
            characterData[name] = {
                id: character.id,
                name: character.name,
                powerstats: character.powerstats    
            };
        };
    };
    return characterData;
};

async function getImageData(callback) {
    const characterStats = await getCharacterStats(characterNames);

    playerChoices.forEach(function(image) {
        image.addEventListener("click", async function(){
            let imageName = image.getAttribute("name")
            if (characterStats[imageName]) {
                let selectedCharacterStats = characterStats[imageName].powerstats;
                callback({ imageName, selectedCharacterStats, player: currentPlayer });
            }
        });
    });
};

function toCamelCase(str) {
    if (str.toLowerCase() === 'spider-gwen') {
        return 'spiderGwen';
    };

    let words = str.toLowerCase().split(' ');
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    };
    return words.join('');
};

function setPlayerImage() {
    getImageData(function(character) {
        let camelCaseName = toCamelCase(character.imageName);
        if (character.player === "Player 1") {
            selectedNameP1.textContent = character.imageName;
            selectedNameP1.style.display = "block";
            player1Image.src = images.profiles[camelCaseName];
            player1StatsBox.forEach(function(stats, index) {
                stats.style.display = "block";
                let statName = stats.textContent.split("-")[0];
                stats.textContent = `${statName} - ${Object.values(character.selectedCharacterStats)[index]}`;

            });
    
        } else if (character.player === "Player 2") {
            selectedNameP2.textContent = character.imageName;
            selectedNameP2.style.display = "block";
            player2Image.src = images.profiles[camelCaseName];
            player2StatsBox.forEach(function(stats, index) {
                stats.style.display = "block";
                let statName = stats.textContent.split("-")[0];
                stats.textContent = `${statName} - ${Object.values(character.selectedCharacterStats)[index]}`;
            });
        }
    });
};

async function calculateStats() {
    // creating new promise to calculate the stats and determine their random multiplier
    // necessary to make a new promise due the the async nature of this function to begin with
    return new Promise(function(resolve) {
        getImageData(function(character) {
            let totalStats = character.selectedCharacterStats.combat + character.selectedCharacterStats.durability + character.selectedCharacterStats.intelligence + character.selectedCharacterStats.power + character.selectedCharacterStats.speed + character.selectedCharacterStats.strength;
            let randomMultiplier = Math.floor(Math.random() * 6 + 1) / 2;
    
            resolve(totalStats * randomMultiplier);
        });
    });
};

async function simulateFight() {
    let score1 = await calculateStats();
    let score2 = await calculateStats();
    console.log(score1);
    console.log(score2);

    fightButton.addEventListener("click", async function(event) {
        event.preventDefault();

        let winnerName = "";
        let winnerImage = "";
        if (score1 > score2) {
            console.log("Player 1 wins !");
            winnerName = selectedNameP1.textContent;            
            winnerImage = images.victory[toCamelCase(winnerName)];
        } else {
            console.log("Player 2 wins !");
            winnerName = selectedNameP2.textContent;
            winnerImage = images.victory[toCamelCase(winnerName)];
        };

        console.log('Winner Name:', winnerName);
        console.log('Winner Image:', winnerImage);

        sessionStorage.setItem("winnerName", winnerName);
        sessionStorage.setItem("winnerImage", winnerImage);

        setTimeout(function(){ window.location.href = "winner/winner.html"; }, 650);
    });
};


document.addEventListener("DOMContentLoaded", function() {
    updateCurrentPlayer();
    setPlayerImage();
    simulateFight();
});