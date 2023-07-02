const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

//Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter your text',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter your text color',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Enter your shape',
        choices: ["Circle", "Square", "Triangle"],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Enter your shape color',
        name: 'shapeColor',
    }
]

// Function to initialize app
function init() {

}

// Function call to initialize app
init();