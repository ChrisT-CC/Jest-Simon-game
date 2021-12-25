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
}

/* Export the game object 
We are using curly brakets because we'll be exporting more than one object 
and function from this file*/
module.exports = { game, newGame };