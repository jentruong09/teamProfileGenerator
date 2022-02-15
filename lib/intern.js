// getting the employee constructor from the js file
const Employee = require('./employee')

class Intern extends Employee {
    constructor (name, id, email, school) {
        //grabbing the data from parent 
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school
    }

    // overridding the return 
    getRole() {
        return 'Intern'
    }

}

module.exports = Intern