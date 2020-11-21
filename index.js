const inquirer = require('inquirer');

console.log('Hello! Create a README for your project by answering the following questions');

// array of questions for user
const questions = () => {
    return inquirer
        .prompt([{
                type: 'input',
                name: 'gitHubUsername',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'emailAddress',
                message: 'What is your email address?',
            },

            {
                type: 'input',
                name: 'titleOfProject',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'projectDescription',
                message: 'Please write a short description of your project',
            },
            {
                type: 'checkbox',
                name: 'licenses',
                message: 'What kind of license should your project have?',
                choices: [{
                        name: 'MIT',
                    },
                    {
                        name: 'APACHE 2.0',
                    },
                    {
                        name: 'GPL 3.0',
                    },
                    {
                        name: 'BSD 3',
                    },
                    {
                        name: 'None',
                    },
                ]
            },
            {
                type: 'input',
                name: 'commandDependencies',
                message: 'What command should be run to install dependencies?',
            },
            {
                type: 'input',
                name: 'commandTests',
                message: 'What command should be run to run tests?',
            },
            {
                type: 'input',
                name: 'repoInfo',
                message: 'What does the user need to know about using the repo?',
            },
            {
                type: 'input',
                name: 'contributingInfo',
                message: 'What does the user need to know about contributing to the repo?'
            },
        ])
};

questions()
    .then(answers => console.log(answers))
    .then(answers => console.log('Generating README'));

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {

}

// function call to initialize program
init();