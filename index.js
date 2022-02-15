// Node Modules
const fs = require('fs')
const inquirer = require('inquirer')

// To link to generate HTML js
const createHTML = require('./src/createHTML')

//Linking the information for each employee
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')


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
                choices: ['Engineer', 'Intern', 'I do not have anyone else to add']
            }
        ])
        // logging the answers for the team manager
        .then(managerAnswers => {
            const {name, id, email, officeNumber} = managerAnswers;
            const manager = new Manager(name, id, email, officeNumber);

            arrayTeamAnswer.push(manager);
            
            //newPrompt
            if (choices === 'Engineer') {
                return engineerInquiry();
            }
            else if (choices === 'Intern') {
                return internInquiry();
            }
            else if (choices === 'I do not have anyone else to add') {
                return createHTML()
            }
        })
}


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
                choices: ['Engineer', 'Intern', 'I do not have anyone else to add']
            }
        ])
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
                validate: github => {
                    if (github.length < 1) {
                        return console.log("Please enter the school that the intern attends.")
                    }
                    return true;
                }
            },
            {
                type: 'list',
                message: 'Who would you like to add next?',
                choices: ['Engineer', 'Intern', 'I do not have anyone else to add']
            }
        ])
}


// function to initialize app - 
 function createHTML(data) {
     fs.writeFile('./dist/index.html', createHTML(data), (err) =>
        err ? console.log(err) : console.log('Your file has generated!')
     );
 }