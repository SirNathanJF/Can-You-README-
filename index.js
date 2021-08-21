// These are the required resources for the project
const inquirer = require('inquirer');
const generateMarkdownJS = require('./assets/js/markdownGenerator');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub account username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief but detailed description of your project'
    },
    {
        type: 'input',
        name: 'installationResources',
        message: 'What steps are required to install your project? Please provide step by step instructions to get the environment ready'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Please provide instructions for use, and what this project would be helpful for.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any resources or tutorials that you used, as well as collaborators'
    },
    {
        type: 'list',
        name: 'licensing',
        message: 'What license does this project use?',
        choices: ['GNU GPLv3', 'MIT', 'Unlicense']
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'If you want contribution please detail how people can.'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Write out tests for your application. Then provide examples on how to run them faster.'
    }
];

function runApp () {
    inquirer
    .prompt(questions)
    .then((data) => {
        fs.writeFile('./Generated_File/README.md', markdownGenerator(data),
        err => err ? console.error(err) : console.log('Generating your File!'))
    });
};
runApp();