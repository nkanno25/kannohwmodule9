// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');
var generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
// installation instructions, usage information, contribution guidelines, and test instructions
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Enter the description of your project",
    },
    {
        type: "input",
        name: "installationinstructions",
        message: "Enter the installation instructions",
    },
    {
        type: "input",
        name: "usageinformation",
        message: "Enter usage information",
    },
    {
        type: "input",
        name: "contributingguidelines",
        message: "Enter contributing guidelines",
    },
    {
        type: "input",
        name: "testinstructions",
        message: "Enter test instructions",
    },
    {
        type: "list",
        name: "license",
        message: "What type of license will your project have?",
        choices: ["apache", "isc", "mit", "none"]
    },   
    {
        type: "input",
        name: "link",
        message: "Enter your Github Username",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter your Github link!")
                return false;
        }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
    /* Pass your questions in here */
  
  .then((answers) => {
      console.log(answers);
      writeToFile("readMe.md", generateMarkdown(answers));
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
