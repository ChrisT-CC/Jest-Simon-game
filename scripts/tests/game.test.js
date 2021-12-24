/**
 * @jest-environment jsdom
 */
/* 
Change the default Node.js environment to jsdom (a browser-like environment, 
used when building a web app)
By adding a @jest-environment docblock at the top of the file 
*/

// Load the entire HTML page and attach it to the mock DOM
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