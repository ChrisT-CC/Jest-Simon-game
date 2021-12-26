/* Create game object according to Red Green Refactor process 
(add just enough code to get the test to pass) */
let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"]
};

/* define newGame function with just enough code to get the test to pass and nothing else */
function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
}

/* define addTurn function with just enough code to get the test to pass and nothing else */
function addTurn() {
    /* Clear the playerMoves array because this is the start of a new game */
    game.playerMoves = [];
    /* Randomly select one of the available choices, from our game.choices key 
    and push that into the computer sequence array */
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns();
}

/* define showScore function with just enough code to get the test to pass and nothing else */
function showScore() {
    document.getElementById("score").innerText = game.score;
}

/* define lightOn function with just enough code to get the test to pass and nothing else */
function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

/* We are using curly brakets because we'll be exporting more than one object 
and function from this file.
Export the game object and the functions newGame, showScore */
module.exports = { game, newGame, showScore, addTurn, lightsOn };