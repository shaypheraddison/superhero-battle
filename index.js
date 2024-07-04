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

// character images
const images = {
    thumbnails: {
        allMight: "resources/thumbnails/all-might.png",
        bane: "resources/thumbnails/bane.png",
        captainAmerica: "resources/thumbnails/captain-america.png",
        doctorDoom: "resources/thumbnails/doctor-doom.png",
        donatello: "resources/thumbnails/donatello.png",
        enchantress: "resources/thumbnails/enchantress.png",
        harleyQuinn: "resources/thumbnails/harley-quinn.png",
        kyloRen: "resources/thumbnails/kylo-ren.png",
        loki: "resources/thumbnails/loki.png",
        masterChief: "resources/thumbnails/master-chief.png",
        moonKnight: "resources/thumbnails/moon-knight.png",
        redHood: "resources/thumbnails/red-hood.png",
        sauron: "resources/thumbnails/sauron.png",
        scarletSpider: "resources/thumbnails/scarlet-spider.png",
        spiderGwen: "resources/thumbnails/spider-gwen.png",
        stockLeft: "resources/thumbnails/stock-fighter-left.png",
        stockRight: "resources/thumbnails/stock-fighter-right.png",
        storm: "resources/thumbnails/storm.png",
        ultron: "resources/thumbnails/ultron.png",
        vegeta: "resources/thumbnails/vegeta.png"
    },
    profiles: {
        allMight: "resources/profile-images/allmight-prof.png",
        bane: "resources/profile-images/bane-prof.png",
        captainAmerica: "resources/profile-images/captainamerica-prof.png",
        doctorDoom: "resources/profile-images/doctordoom-prof.png",
        donatello: "resources/profile-images/donatello-prof.png",
        enchantress: "resources/profile-images/enchantress-prof.png",
        harleyQuinn: "resources/profile-images/harleyquinn-prof.png",
        kyloRen: "resources/profile-images/kyloren-prof.png",
        loki: "resources/profile-images/loki-prof.png",
        masterChief: "resources/profile-images/masterchief-prof.png",
        moonKnight: "resources/profile-images/moonknight-prof.png",
        redHood: "resources/profile-images/redhood-prof.png",
        sauron: "resources/profile-images/sauron-prof.png",
        scarletSpider: "resources/profile-images/scarletspider-prof.png",
        spiderGwen: "resources/profile-images/spidergwen.png",
        stockLeft: "resources/profile-images/stock-fighter-left-prof.png",
        stockRight: "resources/profile-images/stock-fighter-right-prof.png",
        storm: "resources/profile-images/storm-prof.png",
        ultron: "resources/profile-images/ultron-prof.png",
        vegeta: "resources/profile-images/vegeta-prof.png"
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

let currentPlayer = "";

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
            "intelligence": 41,
            "strength": 100,
            "speed": 67,
            "durability": 42,
            "power": 100,
            "combat": 93
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
    // console.log(characterData);
    return characterData;
};

async function getImageData(callback) {
    const characterStats = await getCharacterStats(characterNames);

    playerChoices.forEach(function(image) {
        image.addEventListener("click", async function(){
            let imageName = image.getAttribute("name")
            if (characterStats[imageName]) {
                let selectedCharacterStats = characterStats[imageName].powerstats;
                // console.log(imageName);
                // console.log(characterStats[imageName].powerstats);
                callback({ imageName, selectedCharacterStats, player: currentPlayer });
            }
        });
    });
};

function setPlayerImage() {
    getImageData(function(character) {
        if (character.player === "Player 1") {
            console.log("Success P1");
            console.log(character.imageName);
            selectedNameP1.textContent = character.imageName;
            selectedNameP1.style.display = "block";
            player1Image.src = images.profiles[character.imageName.toLowerCase().replace(" ","")];
            console.log(player1Image.src);
            player1StatsBox.forEach(function(stats, index) {
                stats.style.display = "block";
                stats.textContent = `${stats.textContent} ${Object.values(character.selectedCharacterStats)[index]}`;

            });
    
        } else if (character.player === "Player 2") {
            console.log("Succes P2");
            console.log(character.imageName);
            selectedNameP2.textContent = character.imageName;
            selectedNameP2.style.display = "block";
            player2StatsBox.forEach(function(p2Statbox) {
                p2Statbox.style.display = "block";
            });
        }
    });
}




// async function battle() {

// }


// async function main() {
//     // const stats = getCharacterStats(characterNames);
//     const imageName = getImageData();

//     while (true) {        
//         const selectedPlayer = await playerSelection();
//         const p1Stats = displayElements.player1StatsBox;
//         const p2Stats = displayElements.player2StatsBox;
//         console.log(selectedPlayer);

//         if (selectedPlayer === "Player 1") {
//             console.log("This was a success!")
//             // console.log(p1Stats);
//             for (let stat of p1Stats) {
//                 console.log(stat);
//             }
//         } else if (selectedPlayer === "Player 2") {
//             console.log("Player 2 button was successfully clicked")
//             console.log(p2Stats);
//         }
//     };
// };

document.addEventListener("DOMContentLoaded", function() {
    updateCurrentPlayer();
    setPlayerImage();
});