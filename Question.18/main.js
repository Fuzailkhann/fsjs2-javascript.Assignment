// 19. Create a countries.js file and store the countries name into this file,
//  create a file web_techs.js and store the popular web 
// technology names into this file. Access both file in a third file named main.js


// we use require() function to import modules in javascript

const countries = require("./countries.js");
const tech = require("./tech.js");

console.log(`i am from ${countries} and learning technology ${tech}`);
