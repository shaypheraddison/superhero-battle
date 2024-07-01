// player radio buttons and fight button
const buttons = {
    playerRadio: document.querySelectorAll("input[name='player']"),
    fightButton: document.getElementById("button")
};

// player-character choice
const displayElements = {
    player1Character: document.getElementById("p1-character"),
    player2Character: document.getElementById("p2-character"),
    player1Image: document.getElementById("player-1-img"),
    player2Image: document.getElementById("player-2-img"),
    playerChoices: document.querySelectorAll(".pic-container"),
    player1StatsBox: document.querySelectorAll("li.p1-ps"),
    player2StatsBox: document.querySelectorAll("li.p2-ps")
};

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
        spiderGwen: "resources/profile-images/spider-gwen.png",
        stockLeft: "resources/profile-images/stock-fighter-left-prof.png",
        stockRight: "resources/profile-images/stock-fighter-right-prof.png",
        storm: "resources/profile-images/storm-prof.png",
        ultron: "resources/profile-images/ultron-prof.png",
        vegeta: "resources/profile-images/vegeta-prof.png"
    }
};

// player choice power stats
// const powerStats = {
//     player1Stats: {
//         intelligence: document.getElementById("p1-int"),
//         strength: document.getElementById("p1-str"),
//         speed: document.getElementById("p1-spd"),
//         durability: document.getElementById("p1-dur"),
//         power: document.getElementById("p1-pwr"),
//         combat: document.getElementById("p1-com")
//     },
//     player2Stats: {
//         intelligence: document.getElementById("p2-int"),
//         strength: document.getElementById("p2-str"),
//         speed: document.getElementById("p2-spd"),
//         durability: document.getElementById("p2-dur"),
//         power: document.getElementById("p2-pwr"),
//         combat: document.getElementById("p2-com")
//     }
// };

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
    console.log(characterData);
    return characterData;
};

async function getImageData() {
    const characterStats = await getCharacterStats(characterNames);
    const choices = displayElements.playerChoices;
    let imageName = "";
    let selectedCharacterStats = "";
    choices.forEach(function(image) {
        image.addEventListener("click", function(){
            const imageName = image.getAttribute("name")
            if (characterStats[imageName]) {
                selectedCharacterStats = characterStats[imageName].powerstats;
                console.log("this statement works");
                console.log(imageName);
                console.log(characterStats[imageName].powerstats);
            }
        });
    });
    return [ selectedCharacterStats, imageName ] 
};

// getImageData();


async function playerSelection() {
    const radioButtons = buttons.playerRadio;

    // new promise needed for checking if the DOM events have been changed (selecting radio buttons), if they do change run rest of function
    return new Promise(function(resolve) {
        function handleChange(event) {
            if (event.target.checked) {
                resolve(event.target.value)}
        };
        radioButtons.forEach(function(button) {
            button.addEventListener("change", handleChange);
        });
    });
}


// async function battle() {

// }


async function main() {
    // const stats = getCharacterStats(characterNames);
    const imageName = getImageData();

    while (true) {        
        const selectedPlayer = await playerSelection();
        const p1Stats = displayElements.player1StatsBox;
        const p2Stats = displayElements.player2StatsBox;
        console.log(selectedPlayer);

        if (selectedPlayer === "Player 1") {
            console.log("This was a success!")
            console.log(p1Stats);
            for (let stat of p1Stats) {
                console.log(stat);
                stat.setAttribute("display", "block");
            }
        } else if (selectedPlayer === "Player 2") {
            console.log("Player 2 button was successfully clicked")
            console.log(p2Stats);
        }
    };
};

document.addEventListener("DOMContentLoaded", function() {
    main();
});