// getting the employee constructor from the js file
const Employee = require('./employee')

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //grabbing the data from parent 
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    // overridding the return 
    getRole() {
        return 'Manager'
    }

}

module.exports = Manager