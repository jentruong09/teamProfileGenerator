// getting the employee constructor from the js file
const Employee = require('./employee')

class Engineer extends Employee {
    constructor (name, id, email, github) {
        //grabbing the data from parent 
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github
    }

    // overridding the return 
    getRole() {
        return 'Engineer'
    }

}

module.exports = Engineer