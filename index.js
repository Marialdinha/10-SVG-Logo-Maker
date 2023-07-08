// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const {Circle, Square, Triangle} = require("./lib/shape");
const { exit } = require("process");

// Global variables
let svg_file = "logo.svg";
let Shape;
let userText;
let userShape;
let Svg;
let fileName;
let svgString;

// SVG Class
class SVG{
  render(){
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">${this.shapeElement}${this.textElement}</svg>`
  }
  setTextElement(text,color){
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
}
  setShapeElement(shape){ 
  this.shapeElement = shape.render()
}
}
  

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
function createFile(fileName, data){
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        return console.log(err)
      }
      console.log("Generated logo.svg")
    })
}

// Function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
      console.log(answers)

      // Checking if up to 3 letters were entered
      if(answers.inputText.length > 0 && answers.inputText.length < 4) {
        userText = answers.inputText;
      }else{
        console.log("Please enter 1-3 characters text")
        return;
      }

      // applying shape choosen by user
      userShape = answers.inputShape.toLowerCase()
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
      }
      Shape.setColor(answers.inputShapeColor);

      // Ceate new SVG
      Svg = new SVG();
      Svg.setTextElement(userText,answers.inputTextColor);
      Svg.setShapeElement(Shape);
      svgString = Svg.render();
      
      // Writing to file
      createFile(svg_file, svgString);
    })
    .catch((error) => {
      console.log(error)
      return;
    })

  }

// Function call to initialize app
init();