// TODO: Include packages needed for this application
const fs =require('fs');
const inquirer = require ('inquirer');

// get the response from the below question and add them to the generateMarkdown.js file to generate the README file
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown") 
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What the name of the project?',
    },
    {
        type: 'input',
        name: 'devName',
        message: 'What the name of the devloper?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the description of the project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution Guidelines:',
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'List the project dependencies:',
    },   
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license:',
        choices: ["MIT","Apache2.0","GPLv3","BSD2c","BoostSW","EclipsePublic","None"],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:',
    },
    {
        type: 'input',
        name: 'videolink',
        message: 'Enter your project video link:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'How to reach me with additional questions?',
    },
     
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Generating Professional README.md File!");
        writeToFile("./README.md", generateMarkdown({ ...responses }));
      });
}

// Function call to initialize app
init();
