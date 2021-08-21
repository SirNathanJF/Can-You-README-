# README-Generator
![License](https://img.shields.io/badge/license-MIT-brightgreen)

This README was made with the program (added the project criteria and example photo afterwards)!

NOTE: I stored the sample README that I generated in the video in the folder "Generated_File", please refer to that for grading purposes. 

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions,this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Review the [Good README Guide](../../01-HTML-Git-CSS/04-Important/Good-README-Guide/README.md) as a reminder of everything that a high-quality, professional README should contain. 

The application will be invoked by using the following command:

```
node index.js
```

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality. Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer. You’ll need to submit a link to the video _and_ add it to the README of your project.

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Table of Contents
* [Installation Guide](#installation)
* [Instructions](#instructions)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)
* [Contributing](#contributing)
* [Tests](#tests)
    
## Installation
To install this project, please fork and clone the repository. In the terminal please run ```npm i inquirer``` to ensure it is installed for this project.

## Instructions
Once inquirer is installed, please open index.js in the integrated terminal and type ```node index.js``` Once prompted with the questions, answer them how you see fit. This README was generated with this program and is a good way to make README templates so that you aren't doign all the work!

![Example](https://raw.githubusercontent.com/SirNathanJF/README-Generator/main/assets/media/codesnippet.PNG)

[Video Link](https://drive.google.com/file/d/1u9Hp4rnXe3pEiKDMWFjvaTuGvNFvDk5v/view?usp=sharing)

## Credits
Node.js, npmjs.com, img.shields.io

## License
![badge](https://img.shields.io/badge/License-MIT-brightgreen)
MIT License
                Copyright (c) 2021, Nathan Flessner
                
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
                
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
                
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
                For more information, please refer to <https://tlo.mit.edu/>
                

---
## Questions
If you have any questions or concerns reach me on [Github](https://github.com/SirNathanJF) or through email at <nathanflessner1@gmail.com>

## Contributing
No contributions at this time!

## Tests
There is currently no testing being done on this application. 
