/**
 * @jest-environment jsdom
 */
/* 
Change the default Node.js environment to jsdom (a browser-like environment, 
used when building a web app)
By adding a @jest-environment docblock at the top of the file 
*/

/* import the game object, newGame that we're testing from the game.js file */
const { game, newGame } = require("../game");

/* Load the entire HTML page and attach it to the mock DOM */
beforeAll(() => {
    /* Install Node's fs library (a file system handling module built into Node.js 
    that allows us to open, read and write files) */
    let fs = require("fs");
    /* Use fs to read the contents of index.html file, with the utf-8 character set 
    and store it in fileContents variable */
    let fileContents = fs.readFileSync("index.html", "utf-8");
    /* Attach the fileContents to the DOM */
    document.open();
    document.write(fileContents);
    document.close();
});

/* Test the game object */
describe("game object contains correct keys", () => {
    /* Create our first failing test, to check if the score key exists */
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    /* Add a second failing test. 
    This time we'll check for the existence of the currentGame key, 
    which will hold the sequence of computer moves */
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    /* Add a third failing test. 
    This time we'll check for the existence of the playerMoves key, 
    which will hold the sequence of the turns that the player has taken */
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    /* Add a forth failing test. 
    This time we'll check for the existence of the choices key, 
    which will hold the available ID's for the circles */
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    /* Test to see if our choices array contains the IDs of the four buttons, 
    and we're going to use  this array to generate our random move selection */
    test("choices contain the correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

/* Test the newGame function */
describe("newGame works correctly", () => {
    /* Set up the game state with some fake values to see if the new game function 
    resets them */
    beforeAll(() => {
        game.score = 42;
        game.currentGame = [1, 2, 3, 4];
        newGame();
    });
    /* Test to see if the score has been reset */
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    /* Test to see if the currentGame has been reset */
    test("should set currentGame score to zero", () => {
        expect(game.currentGame).toEqual([]);
    });
});