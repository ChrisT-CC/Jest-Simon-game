/**
 * @jest-environment jsdom
 */
/* 
Change the default Node.js environment to jsdom (a browser-like environment, 
used when building a web app)
By adding a @jest-environment docblock at the top of the file 
*/

/* import the game object that we're testing from the game.js file */
const { game } = require("../game");

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
})

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
})
