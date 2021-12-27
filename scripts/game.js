/* Create game object according to Red Green Refactor process 
(add just enough code to get the test to pass) */
let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    turnNumber: 0,
    choices: ["button1", "button2", "button3", "button4"]
};

/* Define newGame function with just enough code to get the test to pass and nothing else */
/**
 * Resets everything and starts a new game
 */
function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                let move = e.target.getAttribute("id");
                lightsOn(move);
                game.playerMoves.push(move);
                playerTurn();
            });
            circle.setAttribute("data-listener", "true");
        }
    }
    showScore();
    addTurn();
}

/* Define addTurn function with just enough code to get the test to pass and nothing else */
/** 
 * Adds a randome move to the game sequence
*/
function addTurn() {
    /* Clear the playerMoves array because this is the start of a new game */
    game.playerMoves = [];
    /* Randomly select one of the available choices, from our game.choices key 
    and push that into the computer sequence array */
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    showTurns();
}

/* Define showScore function with just enough code to get the test to pass and nothing else */
/**
 * Updates the score in the DOM
 */
function showScore() {
    document.getElementById("score").innerText = game.score;
}

/* Define lightOn function with just enough code to get the test to pass and nothing else */
/**
 * Lights up the appropriate circle
 * @param {*} circ 
 */
function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

/* Define lightOn function with just enough code to get the test to pass and nothing else */
/**
 * Plays the sequence
 * Steps through the currentGame array and turns on the appropriate light 
 * then turns it off again
 */
function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
}

/* Curly brakets are used because more than one component will be exported.
Export the game object and the functions newGame, showScore, addTurn, lightsOn, 
showTurns */
module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns };