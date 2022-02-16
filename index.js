// Node Modules
const fs = require('fs')
const inquirer = require('inquirer')

// To link to generate HTML js
const createHTML = require('./src/createHTML.js')

//Linking the information for each employee
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const { data } = require('browserslist')
const { default: generate } = require('@babel/generator')


// Array for all the answers for the team - for all employees
const arrayTeamAnswer = [];


// Question for Manager
const managerInquiry = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the team manager's name?",
                name: 'name',
                validate: name => {
                    if (name.length < 1) {
                        return console.log("Please enter the team manager's name.")
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: "What is the team manager's employee id number?",
                name: 'id',
                validate: id => {
                    if (id.length < 1) {
                        return console.log("Please enter the team manager's employee id number.")
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: "What is the team manager's email?",
                name: 'email',
                validate: email => {
                    if (email.length < 1) {
                        return console.log("Please enter the team manager's email address.")
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: "What is the team manager's office number?",
                name: 'officeNumber',
                validate: officeNumber => {
                    if (officeNumber.length < 1) {
                        return console.log("Please enter the team manager's office number.")
                    }
                    return true;
                }
            },
            {
                type: 'list',
                message: 'Who would you like to add next?',
                choices: ['Engineer', 'Intern', 'I do not have anyone else to add'],
                name: 'newMember'
            }
        ])
        // logging the answers for the team manager 
        .then(managerAnswers => {
            const {name, id, email, officeNumber} = managerAnswers;
            const manager = new Manager(name, id, email, officeNumber);

            arrayTeamAnswer.push(manager);
            
            //newPrompt
            if (managerAnswers.newMember === 'Engineer') {
                return engineerInquiry();
            }
            else if (managerAnswers.newMember === 'Intern') {
                return internInquiry();
            }
            else if (managerAnswers.newMember === 'I do not have anyone else to add') {
                return generateHTML(arrayTeamAnswer);
            }
        })
};


// Question for Engineer
const engineerInquiry = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the engineer's name?",
                name: 'name',
                validate: name => {
                    if (name.length < 1) {
                        return console.log("Please enter the engineer's name.")
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: "What is the engineer's employee id number?",
                name: 'id',
                validate: id => {
                    if (id.length < 1) {
                        return console.log("Please enter the engineer's employee id number.")
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: "What is the engineer's email?",
                name: 'email',
                validate: email => {
                    if (email.length < 1) {
                        return console.log("Please enter the engineer's email address.")
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: "What is the engineer's GitHub Username?",
                name: 'github',
                validate: github => {
                    if (github.length < 1) {
                        return console.log("Please enter the engineer's GitHub Username.")
                    }
                    return true;
                }
            },
            {
                type: 'list',
                message: 'Who would you like to add next?',
                choices: ['Engineer', 'Intern', 'I do not have anyone else to add'],
                name: 'newMember'
            }
        ])
        // logging the answers for the engineer
        .then(engineerAnswers => {
            const {name, id, email, github} = engineerAnswers;
            const engineer = new Engineer(name, id, email, github);

            arrayTeamAnswer.push(engineer);
            
            //newPrompt
            if (engineerAnswers.newMember === 'Engineer') {
                return engineerInquiry();
            }
            else if (engineerAnswers.newMember === 'Intern') {
                return internInquiry();
            }
            else if (engineerAnswers.newMember === 'I do not have anyone else to add') {
                return generateHTML(arrayTeamAnswer);
            }
        })
}


// Question for Intern
const internInquiry = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'name',
                validate: name => {
                    if (name.length < 1) {
                        return console.log("Please enter the intern's name.")
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: "What is the intern's employee id number?",
                name: 'id',
                validate: id => {
                    if (id.length < 1) {
                        return console.log("Please enter the intern's employee id number.")
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: "What is the intern's email?",
                name: 'email',
                validate: email => {
                    if (email.length < 1) {
                        return console.log("Please enter the intern's email address.")
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: "What school does the intern attend?",
                name: 'school',
                validate: school => {
                    if (school.length < 1) {
                        return console.log("Please enter the school that the intern attends.")
                    }
                    return true;
                }
            },
            {
                type: 'list',
                message: 'Who would you like to add next?',
                choices: ['Engineer', 'Intern', 'I do not have anyone else to add'],
                name: 'newMember'
            }
        ])
        // logging the answers for the intern
        .then(internAnswers => {
            const {name, id, email, school} = internAnswers;
            const intern = new Intern(name, id, email, school);

            arrayTeamAnswer.push(intern);
            
            //newPrompt
            if (internAnswers.newMember === 'Engineer') {
                return engineerInquiry();
            }
            else if (internAnswers.newMember === 'Intern') {
                return internInquiry();
            }
            else if (internAnswers.newMember === 'I do not have anyone else to add') {
                return generateHTML(arrayTeamAnswer);
            }
        })
}


//The index.html will generate, data is not pulling --- named it too many different things -- change them (change return as well for all 3 else if returns)

// 
function generateHTML(data) {
    fs.writeFile('./dist/index.html', createHTML(data), (err) =>
        err ? console.log(err) : console.log('Your file has generated!')
    );
}



function init() {
    return managerInquiry();
}


init();