/**
 * @jest-environment jsdom
 */
/* 
Change the default Node.js environment to jsdom (a browser-like environment, 
used when building a web app)
By adding a @jest-environment docblock at the top of the file 
*/

/* Import the game object and the functions newGame, showScore, addTurn, lightsOn, 
showTurns, playerTurn that we're testing from the game.js file */
const { game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn } = require("../game");

/* Set a Jest spy to check if an alert has been raised */
jest.spyOn(window, "alert").mockImplementation(() => {});

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
    /* Test to see if the turnNumber key exists */
    test("turnNumber key exists", () => {
        expect("turnNumber" in game).toBe(true);
    });

});

/* Test the newGame function */
describe("newGame works correctly", () => {
    /* Set up the game state with some fake values to see if the new game function 
    resets them */
    beforeAll(() => {
        game.score = 42;
        game.currentGame = [1, 2, 3, 4];
        game.playerMoves = [1, 2, 3, 4];
        /* Set the score on the DOM to 42, so that we can see if it gets 
        reset to zero by newGame */
        document.getElementById("score").innerText = "42";
        newGame();
    });
    /* Test to see if the score has been reset */
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    /* Test to see if the currentGame has been reset */
    /* test("should clear the computer sequence array", () => {
        expect(game.currentGame.length).toBe(0);
    }); */
    /* Modify previous test to check if currentGame contains one element */
    test("should be one move in the computer's game array", () => {
        expect(game.currentGame.length).toBe(1);
    });
    /* Test to see if the playerMoves has been reset */
    test("should clear the player moves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    /* Test to see if the score has been reset to zero on the DOM */
    test("should display 0 for the element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
    /* Test to see if  our event listener has been attached */
    test("expect data-listener to be true", () => {
        /* get all of the  elements which have the class of circle */
        const elements = document.getElementsByClassName("circle");
        for (let element of elements) {
            expect(element.getAttribute("data-listener")).toEqual("true");
        }
    });
});

/* Test the gameplay */
describe("gameplay works correctly", () => {
    /*  Reset the game state each time before each test is run */
    beforeEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
        addTurn();
    });
    /* Reset the game state again after each test */
    afterEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
    });
    /* Test if addTurn function works correctly, by creating a test 
    to call addTurn again and check to see that there are now 2 elements */
    test("addTurn adds a new turn to the game", () => {
        addTurn();
        expect(game.currentGame.length).toBe(2);
    });
    /* Test to see if the correct class has been added to our button to light it up */
    test("should add correct class to light up the buttons", () => {
        let button = document.getElementById(game.currentGame[0]);
        lightsOn(game.currentGame[0]);
        expect(button.classList).toContain("light");
    });
    /* Test to see if turnNumber is updated */
    test("showTurns should update game.turnNumber", () => {
        game.turnNumber = 42;
        showTurns();
        expect(game.turnNumber).toBe(0);
    });
    /* Test to check if the score increments if the move is correct */
    test("should increment score if the move is correct", () => {
        game.playerMoves.push(game.currentGame[0]);
        playerTurn();
        expect(game.score).toBe(1);
    });
    /* Test to see if an alert is raised if the move is wrong */
    test("should call an alert if the move is worng", () => {
        game.playerMoves.push("wrong");
        playerTurn();
        expect(window.alert).toBeCalledWith("Wrong move!");
    });
    /* Test to see if turnInProgress is updated */
    test("should toggle turnInProgress to true", () => {
        showTurns();
        expect(game.turnInProgress).toBe(true);
    });
});