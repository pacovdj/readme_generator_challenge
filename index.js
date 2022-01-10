// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquierer = require('inquirer');
const fs = require ('fs')
const { message } = require ('statuses');

inquierer.prompt(
    [
        {
         type: 'input',
         message: 'What is your name?',
         name: 'first name',
         validate: (value)=> {if (value){return true} else {return 'you must input a value to continue'}},   
        },
        {
         type: 'input',
         message: 'What is the title of your project?',
         name: 'title',
         validate: (value)=> {if (value){return true} else {return 'you must input a value to continue'}},   
        },
        {
        type: 'input',
        message: 'How do you install your app?',
        name: 'installation',
        validate: (value)=> {if (value){return true} else {return 'you must input a value to continue'}},   
        },
        {
        type: 'input',
        message: 'Are there any instructions to follow?',
        name: 'instructions',
        validate: (value)=> {if (value){return true} else {return 'you must input a value to continue'}},
        },
        {
        type: 'input',
        message: 'How do you use your app?',
        name: 'using your app',
        validate: (value)=> {if (value){return true} else {return 'you must input a value to continue'}},   
        },
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
