// REST API for superhero data
const apiUrl = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api";
const allMightJSON = "resources/all-might.json";

// player radio buttons and fight button
const buttons = {
    player1Radio: document.getElementById("p1-radio"),
    player2Radio: document.getElementById("p2-radio"),
    fightButton: document.getElementById("button")
};

// player-character choice
const displayElements = {
    player1Character: document.getElementById("p1-character"),
    player2Character: document.getElementById("p2-character"),
    player1Stock: document.getElementById("player-1-img"),
    player2Stock: document.getElementById("player-2-img"),
    playerChoices: document.querySelectorAll("#choices")
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
const powerStats = {
    player1Stats: {
        intelligence: document.getElementById("p1-int"),
        strenght: document.getElementById("p1-str"),
        speed: document.getElementById("p1-spd"),
        durability: document.getElementById("p1-dur"),
        power: document.getElementById("p1-pwr"),
        combat: document.getElementById("p1-com"),
    },
    player2Stats: {
        intelligence: document.getElementById("p2-int"),
        strenght: document.getElementById("p2-str"),
        speed: document.getElementById("p2-spd"),
        durability: document.getElementById("p2-dur"),
        power: document.getElementById("p2-pwr"),
        combat: document.getElementById("p2-com"),
    }
};

async function getPlayerChoice() {
    
}







// async function getCharPowerStats(id) {
    
// }


// async function main() {

// }