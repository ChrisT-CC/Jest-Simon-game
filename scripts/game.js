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
}

/* define showScore function with just enough code to get the test to pass and nothing else */
function showScore() {
    document.getElementById("score").innerText = game.score;
}

/* We are using curly brakets because we'll be exporting more than one object 
and function from this file.
Export the game object and the functions newGame, showScore */
module.exports = { game, newGame, showScore };