// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const {Circle, Square, Triangle} = require("./lib/shape");

// Global variable
let Shape;

//Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'inputText',
        message: 'Enter your three letters text',
    },
    {
        type: 'input',
        name: 'inputTextColor',
        message: 'Enter your text color keyword or hexadecimal number',
    },
    {
        type: 'list',
        name: 'inputShape',
        message: 'Choose your shape',
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: 'input',
        name: 'inputShapeColor',
        message: 'Enter your shape color keyword or hexadecimal number',
    }
]

  // Create file
  function createFile(answers){
    Shape.setColor(answers.inputShapeColor);
    console.log(Shape);

}

// Function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
      console.log(answers)
      let userShape = answers.inputShape.toLowerCase()
      switch(userShape) {
        case "circle":
          Shape = new Circle();
          break;
        case "triangle":
          Shape = new Triangle();
          break;
        case "square":
          Shape = new Square();
            break;
        default:
          console.log("You have to choose circle, triangle or square")
      }
      console.log(Shape);
      createFile(answers);
    })
    .catch((error) => {
      console.log(error)
    })
  }

// Function call to initialize app
init();